import { createProductAction } from "@/actions/products/create-product-action"
import FormProduct from "./form-product"

function CreateProductPage() {
    return (
        <div className="">
            <h1 className="text-2xl font-semibold text-center">Creando Producto</h1>
            <div className="w-1/2 mx-auto mt-5">
                <FormProduct fnAction={createProductAction} />
            </div>
        </div>
    )
}

export default CreateProductPage
