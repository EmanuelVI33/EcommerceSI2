import { getProducts } from "@/src/lib/api/products";
// import { redirect } from "next/navigation";
export default async function ProductsPage() {
  const response = await getProducts()
  console.log(`Respuesta server ${JSON.stringify(response)}`)

  const products = response.data.data
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products && products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Descripción: {product.description}</p>
            {/* <p>
              Categoría: {product.category.name} -{' '}
              {product.category.description}
            </p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
  