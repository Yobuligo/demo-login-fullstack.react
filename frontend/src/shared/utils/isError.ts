import { IError } from "../models/IError";

export const isError = (value: any): value is IError => {
  return "reason" in value;
};
