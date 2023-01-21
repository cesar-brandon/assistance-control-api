import "dotenv/config";
import { Sequelize } from "sequelize";

const database = <string>process.env.DATABASE;
const password = <string>process.env.PASSWORD;
const username = <string>process.env.USER;

const connection = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
