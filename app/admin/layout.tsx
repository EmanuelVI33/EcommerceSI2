import AdminSidebar from "@/components/admin/AdminSidebar"
import { Toaster } from "@/components/ui/sonner"

function AdminLayout({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <>
            <div className="md:flex bg-primary text-primary-foreground shadow">
                <aside className="md:w-72 md:h-screen">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5 bg-slate-600">
                    {children}
                </main>
            </div>
            <Toaster />
        </>
    )
}

export default AdminLayout
