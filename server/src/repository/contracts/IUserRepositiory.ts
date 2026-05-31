import type { Types } from "mongoose";
import type { IUser } from "../../model/user.model.js";

export interface IUserRepository {
  createUser(userData: {
    userName: string;
    fullName?: string;
    email: string;
    password: string;
    provider?: "local" | "google" | "github";
    isVerified?: boolean;
  }): Promise<IUser>;

  findByEmailOrUserName(email: string, userName: string): Promise<IUser | null>;

  findById(userId: string | Types.ObjectId): Promise<IUser | null>;
}
