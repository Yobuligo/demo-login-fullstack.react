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
      const body = JSON.stringify(data);
      const response = await fetch(url, { method: "POST", mode: "cors", body });
      const json = await response.json();
      if (response.ok) {
        resolve(json);
      } else {
        reject(json);
      }
    });
  }
}
