import crypto from "crypto";
import { emailMQ } from "../queue/email.queue.js";
import { MongoUserRepository } from "../repositories/implimentation/MongoUserRepository.js";
import { AppError } from "../utils/appError.js";
import { newOtp } from "../utils/otp.js";
import { redis } from "../db/redis.db.js";
import { CONFIG } from "../config/dotenv.config.js";

export class AuthService {
  constructor() {
    this.userRepository = new MongoUserRepository();
  }

  async createUser(userData) {
    const { email, password } = userData;

    const isExists = await this.userRepository.findByEmail(email);

    if (isExists) {
      throw new AppError("user already exist", 409);
    }

    const otp = newOtp;

    try {
      await emailMQ.add(
        "emailVerification",
        {
          email: email,
          otp: otp,
        },
        {
          attempts: 3,
          backoff: {
            type: "exponential",
            delay: 5000,
          },
          removeOnComplete: true,
          removeOnFail: false,
        },
      );
    } catch (error) {
      console.log("Error while sending otp: " + error.message);
    }

    await redis.set(`otp:${email}`, otp.toString(), "EX", 600);

    const user = await this.userRepository.createUser(userData);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return {
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
      tokens: { accessToken, refreshToken },
    };
  }

  async loginUser(userData) {
    const { email, password } = userData;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("invalid credentials", 401);
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      throw new AppError("invalid credentials", 401);
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return {
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
      tokens: { accessToken, refreshToken },
    };
  }

  async getMe(userId) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new AppError("user not found", 404);
    }
    return user;
  }

  async logoutUser(userId) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new AppError("user not found", 404);
    }
    user.refreshToken = null;
    user.save({ validateBeforeSave: false });
    return user;
  }

  async forgotPassword(email) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      console.log(`Forgot password request for non-existent email: ${email}`);
      return;
    }

    const rawToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");
    const redisKey = `forgot:${hashedToken}`;
    await redis.set(redisKey, user._id.toString(), "EX", 600);

    const frontendUrl = CONFIG.CORS_ORIGIN || "http://localhost:5173";
    const resetLink = `${frontendUrl}/reset-password?token=${rawToken}`;

    try {
      await emailMQ.add(
        "forgotPassword",
        {
          email: user.email,
          resetLink,
        },
        {
          attempts: 3,
          backoff: {
            type: "exponential",
            delay: 5000,
          },
          removeOnComplete: true,
          removeOnFail: false,
        },
      );
    } catch (error) {
      console.error("Error queueing forgot password email:", error);
    }
  }

  async resetPassword(token, password) {
    if (!token) {
      throw new AppError("Invalid or expired token", 400);
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const redisKey = `forgot:${hashedToken}`;

    const userId = await redis.get(redisKey);
    if (!userId) {
      throw new AppError("Invalid or expired token", 400);
    }
    await redis.del(redisKey);

    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    user.password = password;
    await user.save({ validateBeforeSave: false });
  }
}
