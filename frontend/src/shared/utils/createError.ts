import { IError } from "../models/IError";

export const createError = (reason: string): IError => {
  return { reason };
};
