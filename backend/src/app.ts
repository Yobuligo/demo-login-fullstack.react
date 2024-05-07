import bodyParser from "body-parser";
import express from "express";
import { UserController } from "./controllers/UserController";

const server = express();

server.use(bodyParser.json());
server.use(new UserController().router);
server.use((_, res) => res.status(404).send("<h1>Unknown Request</h1>"));
server.listen(5000);
