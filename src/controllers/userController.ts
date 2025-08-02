import { UserService } from "../services/UserService";
import { ICreateUserDTO, IUser } from "../@types/UserTypes";
import { User } from "../models/User";

export class UserController {
  private userService = new UserService();

  async create(data: ICreateUserDTO): Promise<IUser> {
    return await this.userService.create(data);
  }

}
