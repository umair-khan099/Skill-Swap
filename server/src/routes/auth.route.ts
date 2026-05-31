import { Router } from "express";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema } from "../validation/auth.validation.js";
import { registerUser } from "../controller/auth.controller.js";
const authRouter = Router();

authRouter.post("/register", validate(registerSchema), registerUser);

export default authRouter;
