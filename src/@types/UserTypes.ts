export interface IUserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type IUserCreateInput = Pick<IUserAttributes, "name" | "email" | "password">;

export type IUserUpdateInput = Partial<IUserCreateInput>;
