import { ISession } from "../shared/models/ISession";
import { IValue } from "../types/IValue";

export interface IAppContext {
  session: IValue<ISession | undefined>;
}
