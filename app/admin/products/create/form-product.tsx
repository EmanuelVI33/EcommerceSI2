"use client"

import {  productFormSchema } from "@/src/shemas"
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
import { Product } from '../../../../src/types/index';

export type ProductWithImage = Category & {
    image?: File
}

type Props = {
    product?: Product
    fnAction: (formData: FormData) => Promise<{
        success: boolean;
        data?: ResponseMessage<Product> | ApiResponse;
    }>;
}

function FormProduct({product, fnAction} : Props) {
    console.log(`Recibe product ${product}`)
    const router = useRouter()
    const fileRef = useRef<HTMLInputElement | null>(null);
    const form = useForm<z.infer<typeof productFormSchema>>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: product?.name ?? '',
            price: product?.price ?? 0,
            description: product?.description ?? '',
            imageUrl: product?.imageUrl ?? '',
            categoryId: product?.category?.id ?? ''
        }
    })

    async function onSubmit(values: z.infer<typeof productFormSchema>) {
        try {
            const formData = new FormData();

            // Agregar los valores al FormData
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('price', values.price.toString()); 
            formData.append('categoryId', '1');

            // Si se selecciona una imagen, añadirla
            if (fileRef.current?.files?.[0]) {
                formData.append('image', fileRef.current.files[0]);
            }

            // Si existe un producto, añadir el ID
            if (product?.id) {
                formData.append('id', product.id);
            }

            // Asegurar que imageUrl está en el FormData
            formData.append('imageUrl', values.imageUrl ?? '');

            const response = await fnAction(formData);

            if (response.success) {
                toast.success('Operación exitosa');
                router.replace('/admin/products');
                router.refresh();
            } else {
                toast.error(`Error: ${response.data?.message}`);
            }
        } catch (error) {
            console.error("Error al realizar la acción:", error);
            toast.error('Ocurrió un error al guardar el producto.');
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
                    name="price"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Precio</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="precio" {...field} />
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
                {product?.imageUrl && (
                    <div className="mt-4">
                        <FormLabel>Imagen Actual</FormLabel>
                        <img src={product.imageUrl} alt="Imagen de categoría" className="w-40 h-auto" />
                    </div>
                )}
                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                                <Input type="hidden" {...field} defaultValue="1" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />   
                <Input
                    className="mt-4"
                    type="file"
                    ref={fileRef}
                    placeholder="Subir imagen"
                />

                <div className="flex justify-end mt-5">
                    <Button type="submit" className="w-1/3">
                        Guardar
                    </Button>
                </div>
            </form>
        </Form>   
    )
}

export default FormProduct
