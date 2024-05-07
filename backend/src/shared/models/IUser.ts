import { IEntity } from "./IEntity";

export interface IUser extends IEntity {
  firstname: string;
  lastname: string;
}
