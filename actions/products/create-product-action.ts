"use server"
import { axiosClient } from "@/src/constants/axios-client"
import { ApiResponse, Product, ResponseMessage } from "@/src/types"
import { AxiosError } from "axios"
import { cookies } from "next/headers"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dbqlfxitx', 
    api_key: '836266177714741', 
    api_secret: '2KK5KtUoChm1UheH-gbKSvAwxPI' 
});

export async function createProductAction(formData: FormData) {
    const token = cookies().get('token')?.value;

    try {
        let imageUrl = '';
        const image = formData.get('image') as File | null;

        if (image) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Subir la imagen a Cloudinary
            const responseCloudinary: any = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }).end(buffer);
            });

            imageUrl = responseCloudinary.secure_url ?? '';
            console.log(`Imagen guardada en Cloudinary: ${imageUrl}`);

            formData.set('imageUrl', imageUrl);
        }

        const response = await axiosClient.post<ResponseMessage<Product>>("/admin/products", formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        console.error('Error en la creación de categoría:', error);
        const axiosError = error as AxiosError<ApiResponse>;
        return {
            success: false,
            data: axiosError.response?.data,
        };
    }
}
