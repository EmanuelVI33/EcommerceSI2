import { httpPublic } from "../adapters/http/http-client-factory";

const httpClient = httpPublic();

export async function fetchLogin(data: object) {
    return httpClient.post('/auth/login', data);
}