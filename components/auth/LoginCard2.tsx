import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Label } from "../ui/label"
import { loginAction } from "@/actions/auth-actions"

function LoginCard() {
    return (
        <form action={loginAction} className="spacs-y-8" method="POST">
            <Card className="w-[30rem]">
                <CardHeader>
                    <CardTitle>Iniciar Sesión</CardTitle>
                    <CardDescription>Ingresa tu correo y contraseña</CardDescription>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="email" className="mb-2">Coreo</Label>
                    <Input type="email" id="email" name="email" placeholder="correo@gmail.com" className="mb-4" />
                    <Label htmlFor="password" className="mb-2">Contraseña</Label>
                    <Input type="password" id="password" name="password" placeholder="tú contraseña"   />
                </CardContent>
                <CardFooter className="mt-2">
                    <Button type="submit" className={`w-full`} >Ingresar</Button>
                </CardFooter>
            </Card>
            <div className="mt-2 flex justify-end">
                <p>¿No tienes cuenta?, <Link className="text-cyan-500" href="/auth/register">registrate</Link></p>
            </div>
        </form>
    )
}

export default LoginCard
