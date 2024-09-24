import { HttpClient } from './http-client';
import { PrivateAxiosClient } from './private-http';
import { PublicAxiosClient } from './public-http';

export function httpPrivate(): HttpClient {
  return new PrivateAxiosClient(); 
}

export function httpPublic(): HttpClient {
  return new PublicAxiosClient(); 
}