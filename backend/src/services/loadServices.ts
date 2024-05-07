import { SessionRepoService } from "../repositories/ISessionRepo";
import { UserAuthRepoService } from "../repositories/IUserAuthRepo";
import { UserRepoService } from "../repositories/IUserRepo";
import { SessionRepo } from "../repositories/SessionRepo";
import { UserAuthRepo } from "../repositories/UserAuthRepo";
import { UserRepo } from "../repositories/UserRepo";
import { sp } from "../shared/serviceProvider/ServiceProvider";

export const loadServices = () => {
  sp.put(UserAuthRepoService, new UserAuthRepo());
  sp.put(UserRepoService, new UserRepo());
  sp.put(SessionRepoService, new SessionRepo());
};
