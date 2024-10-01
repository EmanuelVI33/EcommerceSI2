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
    imageUrl: z.string(),
})

export const productFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(3, {
        message: "Correo debe tener al menor 3 caracteres",
    }),
    price: z.preprocess(
        (val) => (typeof val === "string" ? parseFloat(val) : val), // Transformar string a número
        z.number().positive({ message: "El precio debe ser un número positivo" }) // Asegurar que sea un número
    ),
    description: z.string(),
    imageUrl: z.string(),
    categoryId: z.string(),
})