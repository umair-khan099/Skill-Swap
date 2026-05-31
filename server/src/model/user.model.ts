import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CONFIG } from "../config/dotenv.config.js";

export interface IUser extends Document {
  userName: string;

  email: string;

  password: string;

  provider: "local" | "google" | "github";

  refreshToken?: string;

  isVerified: boolean;

  isPasswordCorrect(password: string): Promise<boolean>;

  generateAccessToken(): string;

  generateRefreshToken(): Promise<string>;
}

const userSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 20,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: function (this: IUser) {
        return this.provider === "local";
      },
      minlength: 6,
      select: false,
    },

    provider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },

    refreshToken: {
      type: String,
      select: false,
    },

    isVerified: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (this: IUser) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (
  this: IUser,
  password: string,
) {
  return bcrypt.compare(
    password,

    this.password,
  );
};

userSchema.methods.generateAccessToken = function (this: IUser): string {
  return jwt.sign(
    {
      _id: this._id,
      userName: this.userName,
    },
    CONFIG.ACCESS_TOKEN_KEY,
    {
      expiresIn: CONFIG.ACCESS_TOKEN_EXP as jwt.SignOptions["expiresIn"],
    },
  );
};

userSchema.methods.generateRefreshToken = async function (
  this: IUser,
): Promise<string> {
  return jwt.sign({ _id: this._id }, CONFIG.REFRESH_TOKEN_KEY, {
    expiresIn: CONFIG.REFRESH_TOKEN_EXP as jwt.SignOptions["expiresIn"],
  });
};

export const User = mongoose.model("user", userSchema);
