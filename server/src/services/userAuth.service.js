import { MongoUserRepository } from "../repository/implimentation/mongoUserReposisory.js";
import { AppError } from "../utils/appError.js";

export class UserAuthService {
  constructor() {
    this.userRepository = new MongoUserRepository();
  }

  async registerUser(userData) {
    const { userName, email } = userData;

    const isExist = await this.userRepository.findByEmailOrUserName(
      email,
      userName
    );

    if (isExist) {
      throw new AppError("User already exists", 409);
    }

    const user = await this.userRepository.createUser({
      ...userData,
      provider: "local",
    });

    const accessToken = user.generateAccessToken();

    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;

    return {
      user: {
        userName: user.userName,
        email: user.email,
        isVerified: user.isVerified,
        provider: user.provider,
      },
      accessToken,
      refreshToken,
    };
  }
}