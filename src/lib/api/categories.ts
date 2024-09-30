import { ApiResponse, Category, ResponseMessage } from '@/src/types';
import { cookies } from 'next/headers';
import { axiosClient } from '@/src/constants/axios-client';
import { AxiosError } from 'axios';

export async function fetchCategories() {
    try {
        const token = cookies().get('token')?.value 
        console.log(`Token desde el local storage ${token}`)
        const response = await axiosClient.get<ResponseMessage<Category[]>>('/admin/categories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return {
            success: true,
            data: response.data 
        };
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse>;
        
        console.log("Error axios " + JSON.stringify(axiosError.response?.data) + " - code " + axiosError.code)
        throw new Error(axiosError.response?.data.message ?? "Error en el servidor")   
    }
}

export async function showById(id: string) {
    const token = cookies().get('token')?.value 
    const response = await axiosClient.get<ResponseMessage<Category>>(`/admin/categories/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });   
    return response.data;
}