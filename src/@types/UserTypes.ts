import { IUserAttributes, IUserCreationAttributes } from "../models/User";

export type IUser = Omit<IUserAttributes, "password">;

export type ICreateUserDTO = IUserCreationAttributes;
