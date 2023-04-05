import axios from 'axios';
import { parseCookies } from 'nookies';

export function getApiClient(ctx?: any) {
  const cookies = parseCookies(ctx);
  const sanofiToken = cookies['sanofi-token'];

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  if (sanofiToken) {
    api.defaults.headers['Authorization'] = `Bearer ${sanofiToken}`;
  }

  return api;
}
