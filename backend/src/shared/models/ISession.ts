import { IEntity } from "./IEntity";
import { IUser } from "./IUser";

export interface ISession extends IEntity {
  user: IUser;
}
