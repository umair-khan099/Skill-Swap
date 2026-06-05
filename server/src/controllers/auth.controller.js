import { AuthService } from "../services/auth.services.js";
import { AppResponse } from "../utils/appResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  createUser = asyncHandler(async (req, res) => {
    const userData = req.body;
    const result = await this.authService.createUser(userData);
    res
      .status(201)
      .cookie("accessToken", result.tokens.accessToken, {
        httpOnly: true,
      })
      .cookie("refreshToken", result.tokens.refreshToken, {
        httpOnly: true,
      })
      .json(new AppResponse(201, "user register successfully", result.user));
  });
}
