import { User } from "../../model/user.model..js";
import { IUserRepository } from "../contract/IUserRepository.js";

export class MongoUserRepository extends IUserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findByEmail(email) {
    return await User.findOne({ email }).select("+password");
  }

  async findById(userId) {
    return await User.findById(userId).select("+refreshToken");
  }
}
