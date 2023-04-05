import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

import { HttpClient } from './HttpClient';

export class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3333',
  });

  constructor() {
    const cookies = parseCookies();
    const sanofiToken = cookies['sanofi-token'];

    if (sanofiToken) {
      this.client.defaults.headers['Authorization'] = `Bearer ${sanofiToken}`;
    }
  }

  async post(url: string, payload: any): Promise<any> {
    await this.client.post(url, payload);
  }
}
