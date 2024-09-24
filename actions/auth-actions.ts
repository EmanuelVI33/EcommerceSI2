'use server'

import { fetchLogin } from "@/src/lib/api/auth"
import { loginFormSchema } from "@/src/shemas"
import { Response } from "@/src/types"
import { cookies } from 'next/headers'
import { z } from "zod"

export async function loginAction(loginForm: z.infer<typeof loginFormSchema>): Promise<Response<string>> {
    try {
        console.log(`Datos ${loginForm.password}`)
        const response = await fetchLogin(loginForm)

        console.log(`Respuesta ${response.status}`)

        if (response.success && response.data) {
            const cookieStore = cookies();
            cookieStore.set('token', response.data ?? '', {
                httpOnly: true,  
                secure: process.env.NODE_ENV === 'production', 
                path: '/',       
                maxAge: 60 * 60 * 24 * 7,
            });
        }

        return response
    } catch (error) {
        console.error("Error en loginAction: ", error);

        return {
            status: 500,
            success: false,
            message: "Error inesperado durante la autenticación",
        };
    }
}