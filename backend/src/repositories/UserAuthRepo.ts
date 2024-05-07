import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";
import { IUserAuthRepo } from "./IUserAuthRepo";

export class UserAuthRepo implements IUserAuthRepo {
  private userAuths: IUserAuth[] = [];

  add(userId: string, credentials: ICredentials): void {
    this.userAuths.push({
      userId,
      username: credentials.username,
      password: credentials.password,
    });
  }

  findByCredentials(credentials: ICredentials): IUserAuth | undefined {
    return this.userAuths.find(
      (item) =>
        item.username === credentials.username &&
        item.password === credentials.password
    );
  }
}
