import UserService from "../services/UserService";

class UserController {
  async create(data: { id: string, name: string; email: string; password: string }) {
    return await UserService.createUser(data);
  }

  async getUsers(data: { id : string}){
    return await UserService.getUsers(data.id);
  }
}

export default new UserController();
