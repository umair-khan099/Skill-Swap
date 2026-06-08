import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    fullName: String,

    username: {
      type: String,
      unique: true,
      sparse: true,
    },

    description: String,

    profileImage: String,

    experience: String,

    education: String,

    tags: [String],

    skills: [String],

    badges: [String],

    toLearn: [String],
  },
  {
    timestamps: true,
  }
);

export const Profile = mongoose.model("profile", profileSchema);