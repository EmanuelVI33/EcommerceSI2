import { Input } from "@/components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"
import { Button } from "../../../../components/ui/button"
import { createCategoryAction } from "@/actions/category/create-category-action"
import { Category } from "@/src/types"
import { updateCategoryAction } from "@/actions/category/update-category-action"
import { Label } from "@radix-ui/react-label"

function FormCategory({category} : {category?: Category}) {
    const fnAction = category ? updateCategoryAction : createCategoryAction
    return (
        <form action={fnAction}  className="spacs-y-8">
            <input type="hidden" name="id" value={category?.id} />
            <div className="mb-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" placeholder="nombre" defaultValue={category?.name}  />
            </div>
            <div className="mb-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" name="description" defaultValue={category?.description}>
                </Textarea>
            </div>
            <div className="flex justify-end mt-5">
                <Button type="submit" className="w-1/3">
                    Guardar
                </Button>
            </div>
        </form>
    )
}

export default FormCategory
