import { createCategoryAction } from "@/actions/category/create-category-action"
import FormProduct from "./form-category2"

function CreateCagegoryPage() {
    return (
        <div className="">
            <h1 className="text-2xl font-semibold text-center">Creando Categoría</h1>
            <div className="w-1/2 mx-auto mt-5">
                <FormProduct fnAction={createCategoryAction} />
            </div>
        </div>
    )
}

export default CreateCagegoryPage
