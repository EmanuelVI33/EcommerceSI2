import { httpPublic } from "../adapters/http/http-client-factory";
import { AuthResponse } from "@/src/types";

const httpClient = httpPublic();

export async function fetchLogin(data: object) {
    return httpClient.post<AuthResponse>('/auth/login', data);
}