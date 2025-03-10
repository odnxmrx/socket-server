import express from "express";
import { SERVER_PORT } from "../global/environment";

export default class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;
  }

  //start server
  start(cb: () => void) {
    // (cb: Function)
    this.app.listen(this.port, cb);
  }
}
