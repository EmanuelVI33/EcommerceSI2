import { Category } from '@/src/types';
import { httpPrivate } from '../adapters/http/http-client-factory';

const httpClient = httpPrivate();

export async function fetchCategories(): Promise<Category[]> {
    return httpClient.get<Category[]>('/admin/categories');
}