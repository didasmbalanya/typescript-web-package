import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const method = data.id ? "put" : "post";
    const id = data.id || "";
    return axios[method](`${this.rootUrl}/${id}`, data);
  }
}
