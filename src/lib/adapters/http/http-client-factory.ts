import { AxiosClient } from './axios-client';
import { HttpClient } from './http-client';

export function createHttpClient(): HttpClient {
  return new AxiosClient(); 
}