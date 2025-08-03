import UserService from "../services/UserService";

class UserController {
  async create(data: { name: string; email: string; password: string }) {
    return await UserService.createUser(data);
  }
}

export default new UserController();
