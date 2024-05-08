import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ISession } from "../shared/models/ISession";

export const useSession = (): ISession | undefined => {
  const context = useContext(AppContext);
  return context.session.value;
};
