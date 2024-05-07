import { ServiceType } from "./ServiceType";

export interface IServiceProvider {
  find<T>(abstractType: ServiceType<T>): T;
  findOrNull<T>(abstractType: ServiceType<T>): T | undefined;
  put<T>(abstractType: ServiceType<T>, service: T): void;
}
