import mongoose from "mongoose";
import mongoProfileRepository from "../repository/implimentation/mongoProfileRepository.js";
import { AppError } from "../utils/appError.js";

class ProfileService {
  constructor() {
    this.profileRepository = mongoProfileRepository;
  }

  async createProfile(userId, profileData) {
    const existingProfile = await this.profileRepository.findByUserId(userId);

    if (existingProfile) {
      throw new AppError("Profile already exists", 400);
    }

    if (profileData.username) {
      const usernameExists = await this.profileRepository.findByUsername(
        String(profileData.username)
      );

      if (usernameExists) {
        throw new AppError("Username already taken", 400);
      }
    }

    return await this.profileRepository.create({
      ...profileData,
      userId:
        typeof userId === "string"
          ? new mongoose.Types.ObjectId(userId)
          : userId,
    });
  }

  async getMyProfile(userId) {
    const profile = await this.profileRepository.findByUserId(userId);

    if (!profile) {
      throw new AppError("Profile not found", 404);
    }

    return profile;
  }

  async updateProfile(userId, updateData) {
    delete updateData.userId;

    if (updateData.username) {
      const existingProfile =
        await this.profileRepository.findByUsername(
          String(updateData.username)
        );

      if (
        existingProfile &&
        existingProfile.userId.toString() !== userId.toString()
      ) {
        throw new AppError("Username already taken", 400);
      }
    }

    const updatedProfile =
      await this.profileRepository.updateByUserId(
        userId,
        updateData
      );

    if (!updatedProfile) {
      throw new AppError("Profile not found", 404);
    }

    return updatedProfile;
  }

  async getPublicProfile(username) {
    const profile = await this.profileRepository.findByUsername(username);

    if (!profile) {
      throw new AppError("Profile not found", 404);
    }

    return profile;
  }
}

export default new ProfileService();