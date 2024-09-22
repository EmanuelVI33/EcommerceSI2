export interface HttpClient {
    get<T>(url: string): Promise<T>;
    post(url: string, data: unknown): unknown;
}