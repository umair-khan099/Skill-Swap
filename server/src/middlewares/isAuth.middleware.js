import { CONFIG } from "../config/dotenv.config.js";
import { AppError } from "../utils/appError.js";
import { AppResponse } from "../utils/appResponce.js";
import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json(new AppResponse(401, "Unauthorized"));
    }

    const decoded = jwt.verify(accessToken, CONFIG.ACCESS_TOKEN_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    next(new AppError("Invalid or expired token", 401));
  }
};
