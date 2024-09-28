"use client"
import { useMemo } from "react"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useStore } from "@/src/store"
import { toast } from "sonner"
import { createOrderAction } from "@/actions/create-order-actions"
import { Button } from "../ui/button"

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const clearOrder = useStore((state) => state.clearOrder)
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])

  const handleCreateOrder = async () => {
    const response = await createOrderAction(order)
    console.log(`Respuesta order ${JSON.stringify(response)}`)
    if (response?.success) {
      toast.success('Pedido Realizado Correctamente')
      clearOrder()
    } else {
      toast.error(`${response?.status} - ${response?.message}`)
    }
  }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
        <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

        {order.length === 0 ? <p className="text-center my-10">El pedido esta vacio</p> : (
          <div className="mt-5">
              {order.map(item => (
                <ProductDetails
                  key={item.id}
                  item={item}
                />
              ))}

              <p className="text-2xl mt-20 text-center">
                Total a pagar: {''}
                <span className="font-bold">{formatCurrency(total)}</span>
              </p>

              <Button className="mt-10 w-full" onClick={handleCreateOrder}>Confirmar Pedido</Button>

              {/* <form 
                className="w-full mt-10 space-y-5"
                action={handleCreateOrder}
              >
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="bg-white border border-gray-100 p-2 w-full"
                    name="name"
                  />

                  <input
                    type="submit"
                    className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
                    value='Confirmar Pedido'
                  />
              </form> */}
          </div>
        )} 
    </aside>
  )
}
