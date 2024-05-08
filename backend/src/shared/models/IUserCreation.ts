import { ICredentials } from "./ICredentials";

export interface IUserCreation extends ICredentials {
  firstname: string;
  lastname: string;
}
