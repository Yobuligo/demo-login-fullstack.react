import { Router } from "express";
import { SessionRepoService } from "../repositories/ISessionRepo";
import { UserRepoService } from "../repositories/IUserRepo";
import { ICredentials } from "../shared/models/ICredentials";
import { sp } from "../shared/serviceProvider/ServiceProvider";

export class UserController {
  readonly router = Router();

  constructor() {
    this.login();
  }

  private login() {
    this.router.post("/users/login", (req, res) => {
      const credentials: ICredentials = req.body();
      const user = sp.find(UserRepoService).findByCredentials(credentials);
      if (!user) {
        return res.status(404).send("User not found");
      }

      const session = sp.find(SessionRepoService).createByUser(user);
      res.status(201).send(session);
    });
  }
}
