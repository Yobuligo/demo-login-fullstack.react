import { ICredentials } from "../shared/models/ICredentials";
import { ISession } from "../shared/models/ISession";
import { IUserCreation } from "../shared/models/IUserCreation";
import { RESTApi } from "./RESTApi";

class UserRepoDefault extends RESTApi {
  login(username: string, password: string): Promise<ISession> {
    const credentials: ICredentials = { username, password };
    return this.post(`${this.url}/users/login`, credentials);
  }

  register(userCreation: IUserCreation): Promise<ISession> {
    return this.post(`${this.url}/users/register`, userCreation);
  }
}

export const UserRepo = new UserRepoDefault();
