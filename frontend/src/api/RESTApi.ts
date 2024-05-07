import { AppConfig } from "../AppConfig";

export abstract class RESTApi {
  get<T>(url: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(url, { method: "GET" });
      const json = await response.json();
      if (response.ok) {
        resolve(json);
      } else {
        reject(json);
      }
    });
  }

  post<T>(url: string, data: any): Promise<T> {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (response.ok) {
        resolve(json);
      } else {
        reject(json);
      }
    });
  }

  protected get url(): string {
    return AppConfig.BACKEND_HOST;
  }
}
