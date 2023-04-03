import axios, { AxiosInstance } from "axios";
import { HttpClient } from "./HttpClient";

export class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance = axios.create({
    baseURL: "http://localhost:3333",
  });

  async post(url: string, payload: any): Promise<any> {
    await this.client.post(url, payload);
  }
}
