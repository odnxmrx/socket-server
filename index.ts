import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";

const server = new Server();

//Middleware - BodyParser config:
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json()); //parse to json

//Middleware CORS:
server.app.use(cors({ origin: true, credentials: true })); //anyone can access

//invoke - route
server.app.use("/", router);

server.start(() => {
  console.log(`Server running on port: ${SERVER_PORT}`);
});
