import { buttonVariants } from "@/components/ui/button";
import { CustomTable } from "@/components/ui/CustomTable";
import { fetchCategories } from "@/src/lib/api/categories";
import { ColumnConfig } from "@/src/types/props";
import Image from "next/image";
import Link from "next/link";

async function CategoryPage() {
    const response = await fetchCategories()
    const orders = response.data.data
    const columns: ColumnConfig<typeof orders[number]>[] = [
      { key: "id", label: "Id" },
      { key: "name", label: "Nombre" },
      { key: "description", label: "Descripción" },
      {
        key: "imageUrl",
        label: "Imagén",
        render: (value) => (
          <Image src={value+''} className="h-[150px]" width={200} height={400} alt="categoria" />
        ),
      },
    ];

    return (
        <div>
          <div className="flex justify-between mb-5">
            <h1 className="font-bold text-2xl">Categorías</h1>
            <Link href="/admin/categories/create" className={buttonVariants({variant: "default"})}>Crear Categoría</Link>
          </div>
          <div className="p-5 mx-auto">
            {orders && <CustomTable columns={columns} data={orders!} caption="Mis Pedidos" options={{route: '/admin/categories', deleteAction: false}} />}
          </div>
        </div>
    )
}

export default CategoryPage
