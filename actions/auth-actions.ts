'use server'

import { fetchLogin } from "@/src/lib/api/auth"
import { loginFormSchema } from "@/src/shemas"

export async function loginAction(loginForm: z.infer<typeof loginFormSchema>) {
    try {
        console.log(`Datos ${loginForm.username}`)
        const response = await fetchLogin(loginForm)
        console.log(`Respuesta Login ${response.token}`)
    } catch (error) {
        console.log(`Error login ${error}`)
    }
}