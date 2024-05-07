import { ISession } from "../shared/models/ISession";
import { IUser } from "../shared/models/IUser";
import { Service } from "../shared/serviceProvider/Service";

export interface ISessionRepo {
  createByUser(user: IUser): ISession;
  deleteByUser(user: IUser): void;
}

export class SessionRepoService extends Service<ISessionRepo> {}
