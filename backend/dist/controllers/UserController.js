"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
class UserController {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    login() {
        this.router.post("/users/login", (req, res) => {
            const credentials = req.body();
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map