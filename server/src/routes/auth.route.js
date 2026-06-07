import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, forgotPasswordSchema, resetPasswordSchema } from "../validation/auth.validation.js";
import { AuthController } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.middleware.js";

const authController = new AuthController();

const authRouter = Router();

authRouter.post(
  "/register",
  validate(registerSchema),
  authController.createUser,
);
authRouter.post("/login", validate(registerSchema), authController.loginUser);

authRouter.get("/get-me", isAuth, authController.getMe);

authRouter.post("/logout", isAuth, authController.logoutUser);

authRouter.post("/forget-password", authController.forgetPassword);
authRouter.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  authController.forgotPassword,
);
authRouter.post(
  "/reset-password",
  validate(resetPasswordSchema),
  authController.resetPassword,
);

export default authRouter;
