import type { Types } from "mongoose";
import { MongoUserRepository } from "../repository/implimentation/mongoUserReposisory.js";
import { AppError } from "../utils/appError.js";
import type { IUser } from "../model/user.model.js";

type RegisterUserInput = {
  userName: string;
  fullName?: string;
  email: string;
  password: string;
};

type RegisterUserOutput = {
  user: Pick<IUser, "userName" | "email" | "isVerified" | "provider">;
  accessToken: string;
  refreshToken: string;
};

export class UserAuthService {
  private userRepository: MongoUserRepository;

  constructor() {
    this.userRepository = new MongoUserRepository();
  }

  async registerUser(userData: RegisterUserInput): Promise<RegisterUserOutput> {
    const { userName, email } = userData;

    const isExist = await this.userRepository.findByEmailOrUserName(
      email,
      userName,
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
