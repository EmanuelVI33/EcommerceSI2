import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import Script from "next/script";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

    return (
        <div>
            <Script src="https://aframe.io/releases/1.0.4/aframe.min.js"></Script>
            <Script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></Script>
            <div className="md:flex">
                <OrderSidebar />

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll">
                    <nav className="border-b-2 p-2 hover:text-amber-300 bg-white">
                        <Link href='/orders/history' className="text-xl font-semibold ">Historial de Compra</Link>
                    </nav>
                    <div className="p-5">
                        {children}
                    </div>
                </main>

                <OrderSummary />

                <Toaster />
            </div>
        </div>
    )
}