"use client"

import { categoryFormSchema, productFormSchema } from "@/src/shemas"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import { useRouter } from "next/navigation"
import { Textarea } from "../../../../components/ui/textarea"
import { Button } from "../../../../components/ui/button"
import { toast } from "sonner"
import { ApiResponse, ResponseMessage, Product } from "@/src/types"

type Props = {
    product?: Product
    fnAction: (product: Product) => Promise<{
        success: boolean;
        data?: ResponseMessage<Product> | ApiResponse;
    }>;
}

function FormProduct({product} : Props) {
    console.log(`Recibe product ${product}`)
    // const router = useRouter()
    const form = useForm<z.infer<typeof productFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: product?.name,
            price: product?.price + "",
            description: product?.description,
        }
    })

    async function onSubmit(values: z.infer<typeof productFormSchema>) {
        console.log(values)
        try {
            // const response = await fnAction({...values, id: product?.id, imageUrl: '', categoryId: '1', category: undefined });

            // if (response.success) {
            //     toast.success('Operación exitosa');
            //     router.replace('/admin/products');
            //     router.refresh();
            // } else {
            //     toast.error(`Error: ${response.data?.message}`);
            // }
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
                    name="price"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="nombre" {...field} />
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
