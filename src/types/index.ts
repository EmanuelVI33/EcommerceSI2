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
    date: string
    name: string
    status:  boolean 
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
    name: string
    order: OrderItem[]
}
