import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validation/auth.validation.js";
import { AuthController } from "../controllers/auth.controller.js";

const authController = new AuthController();

const authRouter = Router();

authRouter.post(
  "/register",
  validate(registerSchema),
  authController.createUser,
);

export default authRouter;
