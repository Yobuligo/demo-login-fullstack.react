import { v4 as uuid } from "uuid";
import { ICredentials } from "../shared/models/ICredentials";
import { IUser } from "../shared/models/IUser";
import { sp } from "../shared/serviceProvider/ServiceProvider";
import { UserAuthRepoService } from "./IUserAuthRepo";
import { IUserRepo } from "./IUserRepo";

export class UserRepo implements IUserRepo {
  private users: IUser[] = [];

  createUser(credentials: ICredentials): IUser {
    const userId = uuid();
    sp.find(UserAuthRepoService).add(userId, credentials);
    const user: IUser = {
      id: userId,
      username: credentials.username,
      firstname: "",
      lastname: "",
    };
    this.users.push(user);
    return user;
  }

  findByCredentials(credentials: ICredentials): IUser | undefined {
    const userAuth = sp
      .find(UserAuthRepoService)
      .findByCredentials(credentials);

    if (!userAuth) {
      return;
    }

    return this.users.find((user) => user.id === userAuth.userId);
  }

  findByUsername(username: string): IUser | undefined {
    return this.users.find((user) => user.username === username);
  }
}
