"use client"

import { loginFormSchema } from "@/src/shemas"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginAction } from "@/actions/auth-actions"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function LoginCard() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
    })
    const router = useRouter()

    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        const response = await loginAction(values)
        console.log(`Respuesta cliente ${response.message}`)

        if (response.success && response.data) {
            localStorage.setItem('token', response.data?.token);
            router.push('/orders/1')
            return
        }

        toast.error(`${response.status} - ${response.message}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="spacs-y-8" method="POST">
                <Card className="w-[30rem]">
                    <CardHeader>
                        <CardTitle>Iniciar Sesión</CardTitle>
                        <CardDescription>Ingresa tu correo y contraseña</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Correo</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="correo@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />   
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="tú contraseña"  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />   
                    </CardContent>
                    <CardFooter className="mt-2">
                        <Button type="submit" className={`w-full}`}>Ingresar</Button>
                    </CardFooter>
                </Card>
                <div className="mt-2 flex justify-end">
                    <p>¿No tienes cuenta?, <Link className="text-cyan-500" href="/auth/register">registrate</Link></p>
                </div>
            </form>
        </Form>   
    )
}

export default LoginCard
