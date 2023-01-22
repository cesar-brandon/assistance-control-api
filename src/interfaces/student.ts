import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface IStudent
  extends Model<InferAttributes<IStudent>, InferCreationAttributes<IStudent>> {
  id: number;
  lastname: string;
  name: string;
  specialty: string;
  group: string;
  module: string;
}
