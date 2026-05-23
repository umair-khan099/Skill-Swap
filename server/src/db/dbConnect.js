import mongoose from "mongoose";
import { CONFIG } from "../config/dotenv.config.js";

export const dbConnect = async () => {
  try {
    const response = await mongoose.connect(CONFIG.MONGO_URI);
    console.log(`DataBase connected successfully ${response.connection.host}`);
  } catch (error) {
    console.log("Failed to connect Db", error);
    process.exit(1);
  }
};
