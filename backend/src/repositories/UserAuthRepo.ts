import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";
import { IUserAuthRepo } from "./IUserAuthRepo";

export class UserAuthRepo implements IUserAuthRepo {
  private userAuths: IUserAuth[] = [];

  add(userId: string, credentials: ICredentials): void {
    if (this.containsUserId(userId)) {
      throw new Error(
        `Error while creating user authentication. UserId already in use.`
      );
    }
    this.userAuths.push({
      userId,
      username: credentials.username,
      password: credentials.password,
    });
  }

  containsUserId(userId: string): boolean {
    return (
      this.userAuths.findIndex((userAuth) => userAuth.userId === userId) !== -1
    );
  }

  findByCredentials(credentials: ICredentials): IUserAuth | undefined {
    return this.userAuths.find(
      (item) =>
        item.username === credentials.username &&
        item.password === credentials.password
    );
  }
}
