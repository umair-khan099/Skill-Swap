import { MongoUserRepository } from "../repository/implimentation/mongoUserReposisory";

class UserAuthService {
  constructor() {
    this.userRepository = MongoUserRepository();
  }

  async registerUser(userData) {
    const { userName, fullName, email, password } = userData;

    
  }
}
