import { Redis } from "ioredis";
import { CONFIG } from "../config/dotenv.config.js";

 export const connection = {
  host: CONFIG.REDIS_HOST || "localhost", 
  port: Number(CONFIG.REDIS_PORT) || 6379,
  password: CONFIG.REDIS_PASSWORD || undefined,
};


