import { error } from "console";
import type { IUserAttributes } from "../@types/UserTypes";
import User from "../models/User";
import bcrypt from 'bcryptjs';


class UserService {
  async createUser(data: IUserAttributes) {
    const existing = await User.findOne({ where: { email: data.email } });
    if (existing) throw error("Esse email já está em uso!")
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await User.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });
   
    const { password, ...safeUser } = newUser.toJSON();
    return safeUser;
  }
}
export default new UserService();