import { getOrders } from "@/src/lib/api/orders"
import { Badge } from "@/components/ui/badge"
import { CustomTable } from "@/components/ui/CustomTable";
import { redirect } from "next/navigation";
import { ColumnConfig } from "@/src/types/props";

async function OrderHistoryPage() {
    const { data } = await getOrders()
    if (!data) redirect("/auth/login")
    const orders = data!

    const columns: ColumnConfig<typeof orders[number]>[] = [
      { key: "id", label: "Id" },
      { key: "total", label: "Total" },
      { key: "orderDate", label: "Fecha" },
      {
        key: "status",
        label: "Estado",
        render: (value) => (
          <Badge>{value === 1 ? "Pendiente" : "Completado"}</Badge>
        ),
      },
    ];
    
    return (
        <>
          <div className="flex justify-between mb-5">
            <h1 className="font-bold text-2xl">Historial de Pedidos</h1>
          </div>
          <CustomTable columns={columns} data={orders} caption="Mis Pedidos" />
        </>
    )
}

export default OrderHistoryPage
