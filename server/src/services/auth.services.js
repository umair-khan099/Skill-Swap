import { emailMQ } from "../queue/email.queue.js";
import { MongoUserRepository } from "../repositories/implimentation/MongoUserRepository.js";
import { AppError } from "../utils/appError.js";
import { newOtp } from "../utils/otp.js";

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
      emailMQ.add(
        "emailVerification",
        { 
          email: email, 
          otp: otp 
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

    const user = await this.userRepository.createUser(userData);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.isVerified = true; // Set to true for testing purposes
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
    const user = await this.userRepository
      .findByEmail(email)
      .select("+password");

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
}