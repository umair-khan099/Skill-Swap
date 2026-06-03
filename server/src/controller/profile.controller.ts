import { Request, Response, NextFunction } from "express";
import profileService from "../services/ profile.service.js";

interface RequestWithUser extends Request {
  user: {
    id: string;
    [key: string]: any;
  };
}

class ProfileController {
  async createProfile(req: RequestWithUser, res: Response, next: NextFunction) {
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

  async getMyProfile(req: Request, res: Response) {
    const profile = await profileService.getMyProfile(req.user.id);

    res.status(200).json({
      success: true,
      data: profile,
    });
  }

  async updateProfile(req: RequestWithUser, res: Response, next: NextFunction) {
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

  async getProfileByUsername(req: Request, res: Response, next: NextFunction) {
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
