import { getProducts } from "@/src/lib/api/products";
import { cookies } from "next/headers";
export default async function ProductsPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const products = await getProducts(token)
  console.log(products)
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products?.length > 0 && products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Descripción: {product.description}</p>
            <p>
              Categoría: {product.category.name} -{' '}
              {product.category.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
  