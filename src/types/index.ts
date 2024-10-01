import { ROLE } from "./enum";

export type EntityWithId = {
    id?: string; 
}
export type Response<T> = {
    status?: number 
    message?: string
    success: boolean    
    data?: T;
}
export type ResponseMessage<T> = {
    message: string
    data: T
}
export type ApiResponse = {
    time: Date;
    message: string;
    url: string;
}
export type AuthResponse = {
    token: string
    userId: string
    role: ROLE
}
export type Category = EntityWithId & {
    name: string
    description: string
    imageUrl: string
}
export type Product = EntityWithId & {
    name: string
    price: string
    description: string
    imageUrl: string
    categoryId: string
    category?: Category
}
export type OrderProduct = {
    orderId: string
    productId: string
    quantity: number
}
export type Order = EntityWithId & {
    total: number
    orderDate: string
    status: number 
    paymentMethod: number
    orderProduct: OrderProduct[]
}
export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
} 
export type OrderWithProducts = Order & {
    orderProducts: (OrderProduct & {
        product: Product
    })[]
}
export type CreateOrderData = {
    userId: string
    order: OrderItem[]
}
