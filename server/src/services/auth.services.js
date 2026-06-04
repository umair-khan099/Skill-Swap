import { MongoUserRepository } from "../repositories/implimentation/MongoUserRepository.js";

export class authService {
  constructor() {
    this.userRepository = new MongoUserRepository();
  }

  async registerUser(userData) {
    // TODO: implement register flow
    return {
      user: {
        email: userData?.email,
        isVerified: false,
        provider: "local",
        role: "user",
      },
      accessToken: "",
      refreshToken: "",
    };
  }
}
