import { CreateOrderData } from '../../types/index';
import { httpPrivate } from '../adapters/http/http-client-factory';

const httpClient = httpPrivate();

export async function createOrder(data: CreateOrderData) {
    return httpClient.post('orders', {
        name: data.name,
        orderProducts: data.order.map(product => ({
            productId: product.id,
            queantity: product.quantity
        }))      
    });
}