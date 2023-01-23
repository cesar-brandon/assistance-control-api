import { DataTypes } from "sequelize";
import connection from "../config/connection";
import { IStudent } from "../interfaces/student";
import AssistanceModel from "./assistance";

const StudentModel = connection.define<IStudent>(
  "student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    module: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

StudentModel.hasMany(AssistanceModel, {
  foreignKey: "idStudent",
});

export default StudentModel;
