import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: number;
  lastname: string;
  name: string;
  dni: string;
  email: string;
  password: string;
  idUserType: number;
  state: boolean;
}

export interface IAuth {
  email: string;
  password: string;
}
