import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

    return (
        <>
            <div className="md:flex">
                <OrderSidebar />

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll">
                    <nav className="border-b-2 p-2 hover:text-amber-300">
                        <Link href='/orders/history' className="text-xl font-semibold ">Historial</Link>
                    </nav>
                    <div className="p-5">
                        {children}
                    </div>
                </main>

                <OrderSummary />

                <Toaster />
            </div>
        </>
    )
}