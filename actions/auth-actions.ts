'use server'

import { fetchLogin } from "@/src/lib/api/auth"
import { loginFormSchema } from "@/src/shemas"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { z } from "zod"

export async function loginAction(loginForm: z.infer<typeof loginFormSchema>) {
    const response = await fetchLogin(loginForm);
    console.log(`Respuesta: ${JSON.stringify(response)}`);

    if (response.success && response.data) {
        const cookieStore = cookies();

        cookieStore.set('token', response.data.token, {
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production', 
            path: '/',       
            maxAge: 60 * 60 * 24 * 7,
        });

        cookieStore.set('userId', response.data.userId, {
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production', 
            path: '/',       
            maxAge: 60 * 60 * 24 * 7,
        });
    }

    return response;
}

export async function logoutAction() {
    const deleteCookies = cookies()
    deleteCookies.delete('token')
    deleteCookies.delete('userId')
    redirect('/auth/login')
}