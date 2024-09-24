import axios, { AxiosError, AxiosInstance } from 'axios';
import { HttpClient } from './http-client';
import { API_URL } from '@/src/constants';
import { Response } from '@/src/types';

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
    async get<T>(url: string): Promise<Response<T>> {
        try {
            const response = await this.instance.get<T>(url);
            return {
                success: true,
                status: response.status,
                message: "Operación exitosa",
                data: response.data,
            };
        } catch (error) {
            return this.handleError(error);
        }
    }

    async post<T>(url: string, data: unknown): Promise<Response<T>> {
        try {
            const response = await this.instance.post<T>(url, data);
            return {
                success: true,
                status: response.status,
                message: "Operación exitosa",
                data: response.data,
            };
        } catch (error) {
            return this.handleError<T>(error);
        }
    }

    // Centraliza el manejo de errores en una función
    private handleError<T>(error: unknown): Response<T> {
        if (error instanceof AxiosError) {
            console.error(`Error HTTP: ${error.response?.status} - ${error.response?.data?.message}`);

            return {
                status: error.response?.status || 500,
                success: false,
                message: error.response?.data?.message || "Error desconocido",
                data: undefined,
            };
        }

        console.error("Error inesperado: ", error);
        return {
            status: 500,
            success: false,
            message: "Ocurrió un error inesperado",
            data: undefined,
        };
    }
}




