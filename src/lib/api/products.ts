import { Product } from "@/src/types";
import { createHttpClient } from "../adapters/http/http-client-factory";

const httpClient = createHttpClient();

export async function getProducts(token: string) {
    return await httpClient.get<Product[]>('/admin/products', token)
}

export async function getProductByCategory(id: string) {
    return httpClient.get(`/admin/products/category/${id}`);
}