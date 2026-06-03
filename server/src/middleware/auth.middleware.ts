import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.js";
import { CONFIG } from "../config/dotenv.config.js";
import { log } from "console";

/**
 * Augment Express Request interface to include `user` so assignment to req.user is allowed.
 */
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export const authenticate = (req: Request,_res: Response,next: NextFunction,) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);

  if (!authHeader?.startsWith("Bearer ")) {
    throw new AppError("Unauthorized", 401);
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, CONFIG.ACCESS_TOKEN_KEY!);

  req.user = decoded;

  next();
};
