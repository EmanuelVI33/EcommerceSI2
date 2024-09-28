import axios, { AxiosInstance } from 'axios';
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

    protected abstract setupInterceptors(): void;

    async get<T>(url: string, token: string): Promise<Response<T>> {
        try {
            console.log(`Recibe token ${token}`)
            const response = await this.instance.get<Response<T>>(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            return {
                status: response.status, 
                success: true, 
                message: response.data.message, 
                data: response.data.data 
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status ?? 500,
                    success: false,
                    message: error.response?.data.message ?? "Error desconocido",
                    data: undefined 
                };
            }
            throw error; 
        }
    }

    async post<T>(url: string, data: unknown, token = ''): Promise<Response<T>> {
        try {
            const response = await this.instance.post<Response<T>>(url, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }     
            });
            
            return {
                status: response.status, 
                success: true, 
                message: response.data.message, 
                data: response.data.data 
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    status: error.response?.status ?? 500,
                    success: false,
                    message: error.response?.data.message ?? "Error desconocido",
                    data: undefined 
                };
            }
            throw error; 
        }
    }
}