import { Response } from "@/src/types";

export interface HttpClient {
    get<T>(url: string, token?: string): Promise<Response<T>>;
    post<T>(url: string, data: unknown, token?: string): Promise<Response<T>>;
}