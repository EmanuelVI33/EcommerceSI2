import { httpPublic } from "../adapters/http/http-client-factory";

const httpClient = httpPublic();

export async function fetchLogin(data: object) {
    return await httpClient.post<string>('/auth/login', data);
}