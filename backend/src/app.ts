import bodyParser from "body-parser";
import express from "express";

const server = express();

server.use(bodyParser.json());
server.get("/persons", (req, res) =>
  res.status(200).send([{ firstname: "Stacey" }])
);
server.use((req, res) => res.status(404).send("<h1>Unknown Request</h1>"));
server.listen(5000);
