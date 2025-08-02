import { User } from "../models/User";
import { ICreateUserDTO, IUser } from "../@types/UserTypes";
import bcrypt from "bcryptjs";

export class UserService {
 async create(data: ICreateUserDTO): Promise<IUser> {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  const userJson = user.get({ plain: true }) as IUser & { password?: string };

  delete userJson.password;

  return userJson;
}


}
