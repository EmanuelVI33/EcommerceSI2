"use client"

import { categoryFormSchema } from "@/src/shemas"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Textarea } from "../../../../components/ui/textarea"
import { Button } from "../../../../components/ui/button"
import { toast } from "sonner"
import { ApiResponse, Category, ResponseMessage } from "@/src/types"
import { useRef } from "react"

export type CategoryWithImage = Category & {
    image?: File
}

type Props = {
    category?: Category
    fnAction: (formData: FormData) => Promise<{
        success: boolean;
        data?: ResponseMessage<Category> | ApiResponse;
    }>;
}

function FormCategory2({category, fnAction} : Props) {
    console.log(`Recibe category ${category}`)
    const router = useRouter()
    const fileRef = useRef<HTMLInputElement | null>(null);
    const form = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: category?.name,
            description: category?.description,
            imageUrl: category?.imageUrl
        }
    })

    async function onSubmit(values: z.infer<typeof categoryFormSchema>) {
        try {
            const formData = new FormData();
    
            formData.append('name', values.name);
            formData.append('description', values.description);
            
            if (fileRef.current?.files?.[0]) {
                if (fileRef.current.files[0]) {
                    formData.append('image', fileRef.current.files[0]);
                }
            }

            if (category) {
                formData.append('id', category?.id+'')
            }

            formData.append('imageUrl', category?.imageUrl+'')
    
            // Enviar el formData a la acción
            const response = await fnAction(formData);
    
            if (response.success) {
                toast.success('Operación exitosa');
                router.replace('/admin/categories');
                router.refresh();
            } else {
                toast.error(`Error: ${response.data?.message}`);
            }
        } catch (error) {
            console.error("Error al realizar la acción:", error);
            toast.error('Ocurrió un error al guardar la categoría.');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="spacs-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="nombre" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />   
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                                <Textarea {...field}>
                                </Textarea>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />   
                {category?.imageUrl && (
                    <div className="mt-4">
                        <FormLabel>Imagen Actual</FormLabel>
                        <img src={category.imageUrl} alt="Imagen de categoría" className="w-40 h-auto" />
                    </div>
                )}
                <Input
                    className="mt-4"
                    type="file"
                    ref={fileRef}
                    placeholder="Subir imagen"
                />

                {/* <Input className="mt-4" type="file" ref={fileRef} placeholder="Subir imagen" defaultValue={} /> */}
                <div className="flex justify-end mt-5">
                    <Button type="submit" className="w-1/3">
                        Guardar
                    </Button>
                </div>
            </form>
        </Form>   
    )
}

export default FormCategory2
