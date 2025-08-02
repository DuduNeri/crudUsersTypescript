import UserService from "../services/UserService";

class UserController {
  async create(data: { name: string; email: string; password: string }) {
    try {
      return await UserService.createUser(data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}

export default new UserController();