import { getProducts } from "@/src/lib/api/products";
import { Product } from "@/src/types";

export default async function ProductsPage() {
    const products: Product[] =  await getProducts()
  
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {products.map((product) => (
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
  