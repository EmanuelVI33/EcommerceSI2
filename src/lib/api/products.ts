import { ApiResponse, Product } from "@/src/types";
import { httpPublic } from "../adapters/http/http-client-factory";
import { cookies } from 'next/headers'
import { AxiosError } from "axios";
import { ResponseMessage } from '../../types/index';
import { axiosClient } from "@/src/constants/axios-client";

const httpClient = httpPublic()

export async function getProducts() {
    try {
        const token = cookies().get('token')?.value 
        const response = await axiosClient.get<ResponseMessage<Product[]>>('/admin/products', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return {
            success: true,
            data: response.data 
        }
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse>;
        console.log("Error axios " + JSON.stringify(axiosError.response?.data) + " - code " + axiosError.code)
        throw new Error(axiosError.response?.data.message ?? "Error en el servidor")          
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