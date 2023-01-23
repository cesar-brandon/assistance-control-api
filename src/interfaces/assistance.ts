import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface IAssistance
  extends Model<
    InferAttributes<IAssistance>,
    InferCreationAttributes<IAssistance>
  > {
  id: number;
  idStudent: number;
  status: string;
}
