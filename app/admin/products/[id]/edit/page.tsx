import FormProduct from "../../create/form-product"
import { updateProductAction } from "@/actions/products/update-product-action"
import { getProduct } from "@/src/lib/api/products"

async function UpdateProductPage({params}: { params: { id: string } }) {
    const { data: product } = await getProduct(params.id)
    console.log(`Obteniendo product ${JSON.stringify(product)}`)
    
    return (
        <div className="">
            <h1 className="text-2xl font-semibold text-center">Editando Producto</h1>
            <div className="w-1/2 mx-auto mt-5">
                <FormProduct product={product} fnAction={updateProductAction} />
            </div>
        </div>
    )
}

export default UpdateProductPage
