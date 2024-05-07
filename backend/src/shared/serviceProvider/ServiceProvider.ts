import { error } from "../core/error";
import { IServiceProvider } from "./IServiceProvider";
import { ServiceType } from "./ServiceType";

class ServiceProvider implements IServiceProvider {
  private services: Map<ServiceType<any>, any> = new Map();

  find<T>(abstractType: ServiceType<T>): T {
    return (
      this.findOrNull(abstractType) ??
      error(
        `Error while finding service. Service '${abstractType.name}' not found. Service must be registered to service provider.`
      )
    );
  }

  findOrNull<T>(abstractType: ServiceType<T>): T | undefined {
    return this.services.get(abstractType);
  }

  put<T>(abstractType: ServiceType<T>, service: T): void {
    this.services.set(abstractType, service);
  }
}

export const sp = new ServiceProvider();
