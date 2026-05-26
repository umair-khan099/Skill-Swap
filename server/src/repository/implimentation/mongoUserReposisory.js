export class MongoUserRepository extends IUserRepository {
  async createUser(userData) {
    return User.create(userData);
  }

  async findByEmailOrUserName(email, userName) {
    return User.findOne({ $or: [{ email }, { userName }] }).select("+password");
  }
  async findById(userId) {
    return User.findById(userId);
  }
}
