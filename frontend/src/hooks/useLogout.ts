import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useLogout = () => {
  const context = useContext(AppContext);

  const logout = () => {
    context.session.setValue(undefined);
  };

  return logout;
};
