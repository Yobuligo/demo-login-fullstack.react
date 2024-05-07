import { ICredentials } from "../shared/models/ICredentials";
import { ISession } from "../shared/models/ISession";
import { RESTApi } from "./RESTApi";

class UserRepoDefault extends RESTApi {
  login(username: string, password: string): Promise<ISession> {
    const credentials: ICredentials = { username, password };
    return this.post(`${this.url}/users/login`, credentials);
  }

  register(username: string, password: string): Promise<ISession> {
    const credentials: ICredentials = { username, password };
    return this.post(`${this.url}/users/register`, credentials);
  }
}

export const UserRepo = new UserRepoDefault();
