import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
import { CONFIG } from "../config/dotenv.config.js";

export const authenticate = (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError("Unauthorized", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, CONFIG.ACCESS_TOKEN_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    next(new AppError("Invalid or expired token", 401));
  }
};