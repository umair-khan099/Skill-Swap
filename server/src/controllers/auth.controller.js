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

  loginUser = asyncHandler(async (req, res) => {
    const userData = req.body;

    const result = await this.authService.loginUser(userData);

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

  getMe = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const user = await this.authService.getMe(userId);
    res
      .status(200)
      .json(new AppResponse(200, "user fetched successfully", user));
  });

  logoutUser = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const result = await this.authService.logoutUser(userId);

    res
      .status(201)
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json(new AppResponse(201, "user logout successfully"));
  });
}
