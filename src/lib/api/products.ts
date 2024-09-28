import { Product } from "@/src/types";
import { httpPublic } from "../adapters/http/http-client-factory";
import { cookies } from 'next/headers'

const httpClient = httpPublic()

export async function getProducts() {
    try {
        const token = cookies().get('token')?.value 
        return await httpClient.get<Product[]>('/admin/products', token)
    } catch (error) {
        return {
            status: 500,
            success: false,
            message: "Error desconocido",
            data: undefined 
        };        
    }
}

export async function getProductByCategory(id: string) {
    try {
        const token = cookies().get('token')?.value 
        return httpClient.get<Product[]>(`/admin/products/category/${id}`, token);
    } catch (error) {
        return {
            status: 500,
            success: false,
            message: "Error desconocido",
            data: undefined 
        };       
    }
}