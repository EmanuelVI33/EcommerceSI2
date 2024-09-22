import { createHttpClient } from '../adapters/http/http-client-factory';
import { CreateOrderData } from '../../types/index';

const httpClient = createHttpClient();

export async function createOrder(data: CreateOrderData) {
    return httpClient.post('orders', {
        name: data.name,
        orderProducts: data.order.map(product => ({
            productId: product.id,
            queantity: product.quantity
        }))      
    });
}