import { IUser } from "../shared/models/IUser";
import { ICredentials } from "../shared/models/ICredentials";
import { sp } from "../shared/serviceProvider/ServiceProvider";
import { UserAuthRepoService } from "./IUserAuthRepo";
import { IUserRepo } from "./IUserRepo";

export class UserRepo implements IUserRepo {
  private users: IUser[] = [];

  findByCredentials(credentials: ICredentials): IUser | undefined {
    const userAuth = sp
      .find(UserAuthRepoService)
      .findByCredentials(credentials);

    if (!userAuth) {
      return;
    }

    return this.users.find((user) => user.id === userAuth.userId);
  }
}
