import { Router } from "express";
import { SessionRepoService } from "../repositories/ISessionRepo";
import { UserRepoService } from "../repositories/IUserRepo";
import { ICredentials } from "../shared/models/ICredentials";
import { IUserCreation } from "../shared/models/IUserCreation";
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
        return res.status(404).send(createError("Invalid user or password"));
      }

      const session = sp.find(SessionRepoService).createByUser(user);
      res.status(201).send(session);
    });
  }

  private register() {
    this.router.post("/users/register", (req, res) => {
      const userCreation: IUserCreation = req.body;
      let user = sp.find(UserRepoService).findByUsername(userCreation.username);

      if (user) {
        return res.status(400).send(createError("Username already in use"));
      }

      try {
        const user = sp.find(UserRepoService).createUser(userCreation);
        res.status(200).send(user);
      } catch (error) {
        if (error instanceof Error) {
          res.status(400).send(createError(error.message));
        } else {
          res
            .status(400)
            .send(createError("Unknown error while creating user"));
        }
      }
    });
  }
}
