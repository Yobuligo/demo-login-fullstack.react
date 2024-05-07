import { IUser } from "../shared/models/IUser";
import { ICredentials } from "../shared/models/ICredentials";
import { Service } from "../shared/serviceProvider/Service";

export interface IUserRepo {
  findByCredentials(credentials: ICredentials): IUser | undefined;
}

export class UserRepoService extends Service<IUserRepo> {}
