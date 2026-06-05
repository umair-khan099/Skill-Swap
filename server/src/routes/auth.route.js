import { Router } from "express";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema } from "../validation/auth.validation.js";
import { AuthController } from "../controllers/auth.controller.js";

const authController = new AuthController();

export const authRouter = Router();

authRouter.post("/register", validate(registerSchema), authController.createUser);
