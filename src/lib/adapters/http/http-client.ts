export interface HttpClient {
    get<T>(url: string, token?: string): Promise<T>;
    post(url: string, data: unknown, token?: string): unknown;
}