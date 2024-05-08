import { v4 as uuid } from "uuid";
import { ICredentials } from "../shared/models/ICredentials";
import { IUser } from "../shared/models/IUser";
import { IUserCreation } from "../shared/models/IUserCreation";
import { sp } from "../shared/serviceProvider/ServiceProvider";
import { UserAuthRepoService } from "./IUserAuthRepo";
import { IUserRepo } from "./IUserRepo";

export class UserRepo implements IUserRepo {
  private users: IUser[] = [];

  createUser(userCreation: IUserCreation): IUser {
    if (userCreation.username.length === 0) {
      throw new Error(`Error while creating user. Username must be provided`);
    }

    if (userCreation.password.length === 0) {
      throw new Error(`Error while creating user. Password must be provided`);
    }

    const userId = uuid();
    sp.find(UserAuthRepoService).add(userId, userCreation);
    const user: IUser = {
      id: userId,
      username: userCreation.username,
      firstname: userCreation.firstname,
      lastname: userCreation.lastname,
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
