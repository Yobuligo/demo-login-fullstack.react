import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";
import { IUserAuthRepo } from "./IUserAuthRepo";

export class UserAuthRepo implements IUserAuthRepo {
  private data: IUserAuth[] = [];

  findByCredentials(credentials: ICredentials): IUserAuth | undefined {
    return this.data.find(
      (item) =>
        item.username === credentials.username &&
        item.password === credentials.password
    );
  }
}
