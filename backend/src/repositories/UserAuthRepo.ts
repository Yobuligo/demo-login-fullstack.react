import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";

class UserAuthRepoDefault {
  private data: IUserAuth[] = [];

  findByCredentials(credentials: ICredentials): IUserAuth | undefined {
    return this.data.find(
      (item) =>
        item.username === credentials.username &&
        item.password === credentials.password
    );
  }
}

export const UserAuthRepo = new UserAuthRepoDefault();
