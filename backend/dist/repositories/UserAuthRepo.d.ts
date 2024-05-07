import { IUserAuth } from "../models/IUserAuth";
import { ICredentials } from "../shared/models/ICredentials";
declare class UserAuthRepoDefault {
    private data;
    findByCredentials(credentials: ICredentials): IUserAuth | undefined;
}
export declare const UserAuthRepo: UserAuthRepoDefault;
export {};
