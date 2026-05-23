import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
