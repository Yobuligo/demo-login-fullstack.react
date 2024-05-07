import { error } from "./shared/core/error";

export const AppConfig = {
  BACKEND_HOST: process.env.REACT_APP_BACKEND_HOST ?? error("Error while getting Backend Host. Parameter not found"),
};
