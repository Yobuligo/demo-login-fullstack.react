import bodyParser from "body-parser";
import express from "express";
import { UserController } from "./controllers/UserController";
import { loadServices } from "./services/loadServices";

loadServices();

const server = express();
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader(
    "access-control-allow-methods",
    "GET, POST, DELETE, PATCH, PUT"
  );
  res.setHeader("access-control-allow-headers", "Content-Type");
  next();
});
server.use(new UserController().router);
server.use((_, res) => res.status(404).send("<h1>Unknown Request</h1>"));
server.listen(5000);
