import { ICredentials } from "../shared/models/ICredentials";
import { IUser } from "../shared/models/IUser";
import { IUserCreation } from "../shared/models/IUserCreation";
import { Service } from "../shared/serviceProvider/Service";

export interface IUserRepo {
  createUser(userCreation: IUserCreation): IUser;
  findByCredentials(credentials: ICredentials): IUser | undefined;
  findByUsername(username: string): IUser | undefined;
}

export class UserRepoService extends Service<IUserRepo> {}
