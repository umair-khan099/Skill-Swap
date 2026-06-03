import mongoose from "mongoose";
import { Profile, IProfile } from "../../model/profile.model.js";
import { IProfileRepository } from "../contracts/IProfileRepository.js";

class MongoProfileRepository implements IProfileRepository {
  async create(profileData: Partial<IProfile>) {
    return await Profile.create(profileData);
  }

  async findByUserId(userId: string | mongoose.Types.ObjectId) {
    return await Profile.findOne({ userId });
  }

  async findByUsername(username: string) {
    return await Profile.findOne()
      .where("username")
      .equals(username)
      .select(
        "fullName username description profileImage experience education tags skills badges toLearn",
      );
  }

  async updateByUserId(
    userId: string | mongoose.Types.ObjectId,
    updateData: Partial<IProfile>,
  ) {
    return await Profile.findOneAndUpdate(
      { userId },
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      },
    );
  }
}

export default new MongoProfileRepository();
