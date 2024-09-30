"use server"
import { axiosClient } from "@/src/constants/axios-client"
import { ApiResponse, Category, ResponseMessage } from "@/src/types"
import { AxiosError } from "axios"
import { cookies } from "next/headers"

export async function updateCategoryAction(category: Category) {
    const token = cookies().get('token')?.value 
    try {
        const response = await axiosClient.put<ResponseMessage<Category>>(`/admin/categories/${category.id}`, category, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        
        return {
            success: true, 
            data: response.data
        }
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse>;
        return {
            success: false,
            data: axiosError.response?.data,
        }  
    }
}