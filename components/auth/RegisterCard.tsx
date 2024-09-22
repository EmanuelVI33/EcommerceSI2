"use client"

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

function RegisterCard() {
    const form = useForm()

    return (
        <>
            <form action="">
                <Form {...form}>
                    <Card className="w-[30rem]">
                        <CardHeader>
                            <CardTitle>Crear Cuenta</CardTitle>
                            <CardDescription>Ingresa tus datos para crear una cuenta</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Nombre Completo</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="tú nombre" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />   
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
                            <Button className="w-full">Ingresar</Button>
                        </CardFooter>
                    </Card>
                    <div className="mt-2 flex justify-end">
                        <p>¿Ya tiene una cuenta?, <Link className="text-cyan-500" href="/auth/login">inicia sesión</Link></p>
                    </div>
                </Form>   
            </form>
        </>
    )
}

export default RegisterCard
