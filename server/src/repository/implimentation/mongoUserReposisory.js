import { User } from "../../model/user.model.js";
import { UserRepository } from "../contracts/IUserRepositiory.js";

export class MongoUserRepository extends UserRepository {
  async createUser(userData) {
    return User.create(userData);
  }

  async findByEmailOrUserName(email, userName) {
    return User.findOne({
      $or: [{ email }, { userName }],
    }).select("+password");
  }

  async findById(userId) {
    return User.findById(userId);
  }
}