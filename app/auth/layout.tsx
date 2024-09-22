function AuthLayout({ title, children}: Readonly<{ title: string, children: React.ReactNode}>) {
    return (
        <main className="h-screen flex flex-col justify-center items-center gap-5 bg-slate-200">
            <h1 className="text-4xl font-semibold">{title}</h1>
            {children}
        </main>
    )
}

export default AuthLayout
