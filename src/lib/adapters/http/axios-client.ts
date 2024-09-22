import axios, { AxiosInstance } from 'axios';
import { HttpClient } from './http-client';
import { API_URL } from '@/src/constants';

export class AxiosClient implements HttpClient {
    private static instance: AxiosInstance;

    private static getAxiosInstance(): AxiosInstance {
        if (!AxiosClient.instance) {
            AxiosClient.instance = axios.create({
                baseURL: API_URL, // Configuración de la API
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return AxiosClient.instance;
    }

    async get<T>(url: string): Promise<T> {
        const response = await AxiosClient.getAxiosInstance().get<T>(url);
        return response.data;
    }
    
    async post<T>(url: string, data: unknown) {
        return AxiosClient.getAxiosInstance().post<T>(url, data);
    }
}