import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.js";

export const errorMiddleware = (
  err: Error | AppError,

  req: Request,

  res: Response,

  next: NextFunction,
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;

  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,

    message,

    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
