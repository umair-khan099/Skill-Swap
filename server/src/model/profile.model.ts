import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
  userId: mongoose.Types.ObjectId;

  fullName: {
    type: String;
    trim: true;
  };

  username: {
    type: String;
    required: true;
    unique: true;
  };

  description?: string;

  profileImage?: string;

  experience?: string;

  education?: string;

  tags: string[];

  skills: string[];

  badges: string[];

  toLearn: string[];
}

const profileSchema = new Schema<IProfile>(
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
  },
);

export const Profile = mongoose.model<IProfile>("profile", profileSchema);
