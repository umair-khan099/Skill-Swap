import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { CONFIG } from "../config/dotenv.config.js";

const userSchema = new Schema(
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
      required: function () {
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

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    { _id: this._id, userName: this.userName },
    CONFIG.ACCESS_TOKEN_KEY,
    { expiresIn: CONFIG.ACCESS_TOKEN_EXP },
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sig({ _id: this._id }, CONFIG.REFRESH_TOKEN_KEY, {
    expiresIn: CONFIG.REFRESH_TOKEN_EXP,
  });
};

export const User = mongoose.model("user", userSchema);
