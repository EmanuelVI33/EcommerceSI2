import ARViewer from "@/components/products/ARView"
import ProductCard from "@/components/products/ProductCard"
import { getProductByCategory } from "@/src/lib/api/products"
import Head from "next/head"

async function OrderPage({ params }: { params: { category: string } }) {
    const {data: products }  = await getProductByCategory(params.category)

    return (
        <>
           
            <h1 className="text-2xl font-semibold my-4">Eligé y personaliza tu pedido</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
                {products && products.map(prod => (
                    <ProductCard key={prod.id} product={prod}  />
                ))}
            </div>
            <ARViewer />
        </>
    )
}

export default OrderPage
