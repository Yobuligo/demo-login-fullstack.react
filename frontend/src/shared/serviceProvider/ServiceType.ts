import { Constructor } from "../core/Constructor";
import { Service } from "./Service";

export type ServiceType<T> = Constructor<Service<T>>;
