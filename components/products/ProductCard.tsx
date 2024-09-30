"use client"
import { Product } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

interface Props {
    product: Product
}


function ProductCard({ product } : Props) {
    return (
        <div className="border bg-white">
            <Image 
                width={400}
                height={200}
                className="h-[200px]"
                src={`/${product.imageUrl}`}
                alt=""
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <AddProductButton product={product} />
            </div>
        </div>
    )
}

export default ProductCard
