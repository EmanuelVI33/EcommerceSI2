import { Category } from '@/src/types';
import { createHttpClient } from '../adapters/http/http-client-factory';

const httpClient = createHttpClient();

export async function fetchCategories(): Promise<Category[]> {
    return httpClient.get<Category[]>('/admin/categories');
}