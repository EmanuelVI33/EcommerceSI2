import { createHttpClient } from '../adapters/http/http-client-factory';

const httpClient = createHttpClient();

export async function fetchLogin(data: object) {
    return httpClient.post('/auth/login', data, '');
}