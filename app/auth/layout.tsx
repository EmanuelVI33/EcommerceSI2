import { Toaster } from "@/components/ui/sonner"

function AuthLayout({ children}: Readonly<{ children: React.ReactNode}>) {
    return (
        <main className="h-screen flex flex-col justify-center items-center gap-5 bg-slate-200">
            <h1 className="text-4xl font-semibold">Autentificación</h1>
            {children}
            <Toaster />
        </main>
    )
}

export default AuthLayout
