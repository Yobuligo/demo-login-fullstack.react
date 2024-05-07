import { Router } from "express";
import { SessionRepoService } from "../repositories/ISessionRepo";
import { UserRepoService } from "../repositories/IUserRepo";
import { ICredentials } from "../shared/models/ICredentials";
import { sp } from "../shared/serviceProvider/ServiceProvider";
import { createError } from "../shared/utils/createError";

export class UserController {
  readonly router = Router();

  constructor() {
    this.login();
    this.register();
  }

  private login() {
    this.router.post("/users/login", (req, res) => {
      const credentials: ICredentials = req.body;
      const user = sp.find(UserRepoService).findByCredentials(credentials);
      if (!user) {
        return res.status(404).send(createError("Invalid user credentials were send"));
      }

      const session = sp.find(SessionRepoService).createByUser(user);
      res.status(201).send(session);
    });
  }

  private register() {
    this.router.post("/users/register", (req, res) => {
      const credentials: ICredentials = req.body;
      let user = sp.find(UserRepoService).findByUsername(credentials.username);

      if (user) {
        return res.status(400).send(createError("Username already in use"));
      }

      user = sp.find(UserRepoService).createUser(credentials);
      const session = sp.find(SessionRepoService).createByUser(user);
      res.status(201).send(session);
    });
  }
}
