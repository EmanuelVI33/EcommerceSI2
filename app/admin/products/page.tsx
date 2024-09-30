import { buttonVariants } from "@/components/ui/button";
import { CustomTable } from "@/components/ui/CustomTable";
import { getProducts } from "@/src/lib/api/products";
import { ColumnConfig } from "@/src/types/props";
import Link from "next/link";

async function ProductPage() {
    const {data: products} = await getProducts()
    const columns: ColumnConfig<typeof products[number]>[] = [
      { key: "id", label: "Id" },
      { key: "name", label: "Nombre" },
      { key: "price", label: "Precio" },
      { key: "description", label: "Descripción" },
      {
        key: "category",
        label: "Categoria",
        render: (value) => (
          <p>{value?.name}</p>
        ),
      },
    ];

    return (
        <section>
          <div className="flex justify-between mb-5">
            <h1 className="font-bold text-2xl">Productos</h1>
            <Link href="/admin/products/create" className={buttonVariants({variant: "default"})}>Crear Producto</Link>
          </div>
          <div className="p-5 mx-auto">
            {products && <CustomTable columns={columns} data={products!} caption="Mis Pedidos" options={{route: '/admin/products'}} />}
          </div>
        </section>
    )
}

export default ProductPage
