"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.get("/persons", (req, res) => res.status(200).send([{ firstname: "Stacey" }]));
server.use((req, res) => res.status(404).send("<h1>Unknown Request</h1>"));
server.listen(5000);
//# sourceMappingURL=app.js.map