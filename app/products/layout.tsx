export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

    return (
        <>
            <div className="md:flex">
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
            </div>
        </>
    )
}