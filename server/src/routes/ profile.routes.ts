import { Router } from "express";
import ProfileController from "../controller/profile.controller.js";
import { authenticate} from "../middleware/auth.middleware.js";

const router = Router();
// console.log(ProfileController.createProfile, "ProfileController.createProfile");
router.post("/", authenticate, ProfileController.createProfile);

router.get("/me", authenticate, ProfileController.getMyProfile);

router.patch("/me", authenticate, ProfileController.updateProfile);

router.get("/:username", ProfileController.getProfileByUsername);

export default router;
