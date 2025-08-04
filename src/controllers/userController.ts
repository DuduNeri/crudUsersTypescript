import UserService from "../services/UserService";

class UserController {
  async create(

    data: {
    id: string,
    name: string;
    email: string;
    password: string

  }) {
    return await UserService.createUser(data);
  }

  async getUsers(

    data: {
      id: string

}) {
    return await UserService.getUser(data.id);
  }

  async updateUser(

    data: {
    id: string;
    name: string;
    email: string;
    password: string;

  }) {
    return await UserService.updateUser(data.id, data);
  }

  async deleteUser(
    data: { 
      id: string 
    }) {
    return UserService.deleteUser(data.id);
  }

}

export default new UserController();
