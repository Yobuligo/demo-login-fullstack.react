import { Router } from "express";
import { ICredentials } from "../shared/models/ICredentials";

export class UserController {
  readonly router = Router();

  constructor() {}

  private login() {
    this.router.post("/users/login", (req, res) => {
      const credentials: ICredentials = req.body();
    });
  }
}
