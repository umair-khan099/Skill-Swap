import mongoose from "mongoose";
import { Profile } from "../../model/profile.model.js";

class MongoProfileRepository {
  async create(profileData) {
    return await Profile.create(profileData);
  }

  async findByUserId(userId) {
    return await Profile.findOne({ userId });
  }

  async findByUsername(username) {
    return await Profile.findOne()
      .where("username")
      .equals(username)
      .select(
        "fullName username description profileImage experience education tags skills badges toLearn"
      );
  }

  async updateByUserId(userId, updateData) {
    return await Profile.findOneAndUpdate(
      { userId },
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      }
    );
  }
}

export default new MongoProfileRepository();