import { DataTypes } from "sequelize";
import connection from "../config/connection";
import { IAssistance } from "../interfaces/assistance";
import UserModel from "./user";

const AssistanceModel = connection.define<IAssistance>(
  "assistances",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idStudent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

AssistanceModel.belongsTo(UserModel, {
  foreignKey: "idStudent",
  as: "assistances",
});

export default AssistanceModel;
