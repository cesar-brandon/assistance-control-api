import "dotenv/config";
import { Sequelize } from "sequelize";

const database = <string>process.env.DATABASE;
const password = <string>process.env.PASSWORD;
const username = <string>process.env.USER;
const host = <string>process.env.HOST;
const port = <number>parseInt(<string>process.env.PORT);

const connection = new Sequelize(
  `mysql://${username}:${password}@${host}:${port}/${database}`
);

export default connection;
