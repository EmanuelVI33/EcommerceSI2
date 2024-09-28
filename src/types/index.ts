export type Response<T> = {
    status?: number 
    message?: string
    success: boolean    
    data?: T;
}
export type AuthResponse = {
    token: string
    userId: string
}
export type Category = {
    id: string
    name: string
    description: string
}
export type Product = {
    id: string
    name: string
    price: number
    description: string
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
