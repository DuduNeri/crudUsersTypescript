import { error } from "console";
import type { IUserAttributes } from "../@types/UserTypes";
import User from "../models/User";
import bcrypt from 'bcryptjs';


class UserService {
  async createUser(data: IUserAttributes) {
    try {
      const existing = await User.findOne({ where: { email: data.email } });

      if (!data.name || !data.email || !data.password) {
        return { error: "Todos os campos são obrigatórios", status: 400 };
      }
      if (existing) throw error("Esse email já está em uso!")

      const hashedPassword = await bcrypt.hash(data.password, 10);
      
      const newUser = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
      });
      const { password, ...safeUser } = newUser.toJSON();
      return safeUser;
    } catch (error) {
      console.log("Erro detalhado:", error);
      throw new Error("Erro ao criar o usuário")
    }
  }

  async getUser(id: string) {
    try {
      const getUser = await User.findByPk(id);
      return getUser;
    } catch (error) {
      return error;
    }
  }
  async getAllUsers(data: IUserAttributes){
    try {
      const getAll = await User.findAll();
      return getAll;
    } catch (error) {
      return error;
    }
  }

  async updateUser(id: string, data: IUserAttributes) {
    try {
      
      if (!data.name || !data.email || !data.password) {
        return { error: "Todos os campos são obrigatórios", status: 400 };
      }

      const [affectedRows] = await User.update(data, { where: { id } });
      
      if (affectedRows === 0) {
        return { error: "Usuário não encontrado", status: 404 };
      }

      return { message: "Usuário atualizado com sucesso" };
    } catch (error) {
      console.log("Erro detalhado:", error);
      throw new Error("Erro ao atualizar o usuário");
    }
  }

  async deleteUser(id: string) {
    try {
      const deleted = await User.destroy({ where: { id } });

      if (deleted === 0) {
        return { error: "Usuário não encontrado", status: 404 };
      }

      return { message: "Usuário deletado com sucesso" };
    } catch (error) {
      console.log("Erro detalhado:", error);
      throw new Error("Erro ao deletar o usuário");
    }
  }

}

export default new UserService();