import { UserAuthService } from "../services/userAuth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const authService = new UserAuthService();

export const registerUser = asyncHandler(async (req, res) => {
  const result = await authService.registerUser(req.body);

  console.log("hello");

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result,
  });
});