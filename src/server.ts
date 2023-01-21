import express, { Application } from "express";
import cors from "cors";
import { router } from "./routes";
import connection from "./config/connection";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await connection.authenticate();
      console.log("Database online 🚀");
    } catch (error) {
      throw new Error(error as string);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("./src/public"));
  }

  routes() {
    this.app.use(router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running ✅: http://localhost:${this.port}`);
    });
  }
}

export default Server;
