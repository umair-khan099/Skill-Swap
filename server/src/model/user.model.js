import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CONFIG } from "../config/dotenv.config.js";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
      required: function () {
        return this.provider === "local";
      },
      select: false,
    },

    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshToken: {
      type: String,
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true },
);

// Pre-save middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  if (!this.password) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Methods
userSchema.methods.isPasswordCorrect = async function (password) {
  if (!this.password) return false;
  try {
    return await bcrypt.compare(password, this.password);
  } catch {
    return false;
  }
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, role: this.role },
    CONFIG.ACCESS_TOKEN_KEY,
    { expiresIn: CONFIG.ACCESS_TOKEN_EXP },
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, CONFIG.REFRESH_TOKEN_KEY, {
    expiresIn: CONFIG.REFRESH_TOKEN_EXP,
  });
};

export const User = model("User", userSchema);
