import axios, { AxiosInstance } from 'axios';
import { HttpClient } from './http-client';
import { API_URL } from '@/src/constants';

export abstract class BaseAxiosClient implements HttpClient {
    protected instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: API_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    // Método abstracto para configurar interceptores específicos
    protected abstract setupInterceptors(): void;

    async get<T>(url: string): Promise<T> {
        const response = await this.instance.get<T>(url);
        return response.data;
    }

    async post<T>(url: string, data: unknown): Promise<T> {
        const response = await this.instance.post<T>(url, data);
        return response.data;
    }
}




