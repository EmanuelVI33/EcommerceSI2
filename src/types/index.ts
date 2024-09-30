import { ROLE } from "./enum";

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
export type Category = {
    id?: string
    name: string
    description: string
    imageUrl: string
}
export type Product = {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    category: Category
}
export type OrderProduct = {
    orderId: string
    productId: string
    quantity: number
}
export type Order = {
    id: number
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
