import mongoose from "mongoose";
import { CONFIG } from "../config/dotenv.config.js";

export const dbConnect = async (): Promise<void> => {
  try {
    const response = await mongoose.connect(CONFIG.MONGO_URI);
    console.log(`DataBase connected successfully ${response.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("DB Connection Failed:", error.message);
    }

    throw error;
  }
};
