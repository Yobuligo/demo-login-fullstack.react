import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";
import { Service } from "../shared/serviceProvider/Service";

export interface IUserAuthRepo {
  add(userId: string, credentials: ICredentials): void;
  containsUserId(userId: string): boolean;
  findByCredentials(credentials: ICredentials): IUserAuth | undefined;
}

export class UserAuthRepoService extends Service<IUserAuthRepo> {}
