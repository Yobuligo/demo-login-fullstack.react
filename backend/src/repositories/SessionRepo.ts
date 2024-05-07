import { v4 as uuid } from "uuid";
import { ISession } from "../shared/models/ISession";
import { IUser } from "../shared/models/IUser";
import { ISessionRepo } from "./ISessionRepo";

export class SessionRepo implements ISessionRepo {
  private sessions: ISession[] = [];

  createByUser(user: IUser): ISession {
    this.deleteByUser(user);
    return { id: uuid(), user };
  }

  deleteByUser(user: IUser): void {
    const index = this.sessions.findIndex(
      (session) => session.user.id === user.id
    );
    if (index !== -1) {
      this.sessions.splice(index, 1);
    }
  }
}
