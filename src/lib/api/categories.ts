import { Category } from '@/src/types';
import { httpPublic } from '../adapters/http/http-client-factory';
import { cookies } from 'next/headers';

const httpClient = httpPublic();

export async function fetchCategories() {
    try {
        const token = cookies().get('token')?.value 
        console.log(`Token desde el local storage ${token}`)
        const response = await httpClient.get<Category[]>('/admin/categories', token);
        return response;
    } catch (error) {
        return {
            status: 500,
            success: false,
            message: "Error desconocido",
            data: undefined 
        };          
    }
}