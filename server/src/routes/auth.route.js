import { Router } from "express";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema } from "../validation/auth.validation.js";
import { registerUser } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/register", validate(registerSchema), registerUser);
