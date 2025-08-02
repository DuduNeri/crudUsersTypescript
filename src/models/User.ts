// User.ts
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { IUserAttributes } from "../@types/UserTypes";

type IUserCreationAttributes = Optional<IUserAttributes, "id" | "createdAt" | "updatedAt">;

interface IUserInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes {}

const User = sequelize.define<IUserInstance>("User", {
   id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false,
   },
}, {
   tableName: "users",
   timestamps: true,
});

export default User;
