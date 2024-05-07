import { IEntity } from "./IEntity";

export interface IUser extends IEntity {
  username: string;
  firstname: string;
  lastname: string;
}
