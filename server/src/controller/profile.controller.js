import profileService from "../services/ profile.service.js";

class ProfileController {
  async createProfile(req, res, next) {
    try {
      const userId = req.user.id;

      const profile = await profileService.createProfile(userId, req.body);

      res.status(201).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  async getMyProfile(req, res, next) {
    try {
      const profile = await profileService.getMyProfile(req.user.id);

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req, res, next) {
    try {
      const userId = req.user.id;

      const profile = await profileService.updateProfile(userId, req.body);

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProfileByUsername(req, res, next) {
    try {
      const username = Array.isArray(req.params.username)
        ? req.params.username[0]
        : req.params.username;

      const profile = await profileService.getPublicProfile(username);

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProfileController();