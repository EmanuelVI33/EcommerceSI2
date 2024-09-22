import { z } from "zod"

export const loginFormSchema = z.object({
    username: z.string().min(2, {
        message: "Correo debe tener al menor 2 caracteres",
    }).email({
        message: "Debe ingresar un correo válido"
    }),
    password: z.string(),
})