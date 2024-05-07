import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";
import { Service } from "../shared/serviceProvider/Service";

export interface IUserAuthRepo {
  findByCredentials(credentials: ICredentials): IUserAuth | undefined;
}

export class UserAuthRepoService extends Service<IUserAuthRepo> {}
