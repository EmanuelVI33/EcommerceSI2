import { Product } from "@/src/types";
import { createHttpClient } from "@/src/lib/adapters/http/http-client-factory";

const httpClient = createHttpClient();

export async function getProducts(): Promise<Product[]> {
    return httpClient.get<Product[]>('/admin/products');
}

export async function getProductByCategory(id: string) {
    return httpClient.get<Product[]>(`/admin/products/category/${id}`);
}