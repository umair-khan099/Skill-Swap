import type { Types } from "mongoose";
import { IUserRepository } from "../contracts/IUserRepositiory.js";
import { User } from "../../model/user.model.js";

type CreateUserInput = {
  userName: string;
  fullName?: string;
  email: string;
  password: string;
  provider?: "local" | "google" | "github";
  isVerified?: boolean;
};

export class MongoUserRepository implements IUserRepository {
  async createUser(userData: CreateUserInput) {
    return User.create(userData);
  }

  async findByEmailOrUserName(email: string, userName: string) {
    return User.findOne({ $or: [{ email }, { userName }] }).select("+password");
  }

  async findById(userId: string | Types.ObjectId) {
    return User.findById(userId);
  }
}
