import { z } from "zod"

export const loginFormSchema = z.object({
    username: z.string().min(2, {
        message: "Correo debe tener al menor 2 caracteres",
    }).email({
        message: "Debe ingresar un correo válido"
    }),
    password: z.string(),
})

export const categoryFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(3, {
        message: "Correo debe tener al menor 3 caracteres",
    }),
    description: z.string(),
})

export const productFormSchema = z.object({
    id: z.string().optional(),
    price: z.string(),
    name: z.string().min(3, {
        message: "Correo debe tener al menor 3 caracteres",
    }),
    description: z.string(),
})