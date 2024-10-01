import AdminSidebar from "@/components/admin/AdminSidebar"
import { Toaster } from "@/components/ui/sonner"

function AdminLayout({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <div>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
            </div>
            <Toaster />
        </div>
    )
}

export default AdminLayout
