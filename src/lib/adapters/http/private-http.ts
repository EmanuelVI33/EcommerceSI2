// import { cookies } from 'next/headers'; 
import { BaseAxiosClient } from './axios-client';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export class PrivateAxiosClient extends BaseAxiosClient {
    protected setupInterceptors(): void {
        // Interceptor para añadir automáticamente el token
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // const cookieStore = cookies();
                // const token = cookieStore.get('token')?.value ?? '';

                // if (token && config.headers) {
                //     config.headers['Authorization'] = `Bearer ${token}`;
                // }

                return config;
            },
            (error: AxiosError) => {
                console.log(`Error interceptor ${error}`)
                return Promise.reject(error);
            }
        );

        // Interceptor para manejar respuestas, como tokens expirados
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: AxiosError) => {
                if (error.response?.status === 401) {
                    console.error('Token expirado o no autorizado');
                    // Aquí puedes redirigir al usuario al login si es necesario.

                    
                }
                return Promise.reject(error);
            }
        );
    }
}