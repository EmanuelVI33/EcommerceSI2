import { cookies } from 'next/headers';
import { CreateOrderData, Order } from '../../types/index';
import { httpPublic } from '../adapters/http/http-client-factory';

const httpClient = httpPublic();

export async function createOrder(data: CreateOrderData, token: string) {
    return await httpClient.post<number>('/orders', data, token);     
}

export async function getOrders() {
    const userId = cookies().get('userId')?.value ?? ''
    const token = cookies().get('token')?.value ?? ''
    return await httpClient.get<Order[]>(`/orders/history/${userId}`, token);     
}