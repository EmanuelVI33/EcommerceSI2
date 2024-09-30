import { showById } from "@/src/lib/api/categories"
import FormCategory2 from "../../create/form-category2"
import { updateCategoryAction } from "@/actions/category/update-category-action"

async function UpdateCaregoryPage({params}: { params: { id: string } }) {
    const { data: category } = await showById(params.id)
    console.log(`Obteniendo category ${JSON.stringify(category)}`)
    
    return (
        <div className="">
            <h1 className="text-2xl font-semibold text-center">Editando Categoría</h1>
            <div className="w-1/2 mx-auto mt-5">
                <FormCategory2 category={category} fnAction={updateCategoryAction} />
            </div>
        </div>
    )
}

export default UpdateCaregoryPage
