import mongoose from "mongoose";
import { IProfile } from "../../model/profile.model.js";

export interface IProfileRepository {
  create(profileData: Partial<IProfile>): Promise<IProfile>;

  findByUserId(
    userId: string | mongoose.Types.ObjectId,
  ): Promise<IProfile | null>;

  findByUsername(
    username: string,
  ): Promise<IProfile | null>;

  updateByUserId(
    userId: string | mongoose.Types.ObjectId,
    updateData: Partial<IProfile>,
  ): Promise<IProfile | null>;
}