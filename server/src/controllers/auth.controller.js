import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  // TODO: implement register logic
  return res.status(501).json({
    success: false,
    message: "registerUser not implemented",
  });
});
