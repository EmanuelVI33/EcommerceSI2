'use server'

import { createOrder } from "@/src/lib/api/orders";
import {  OrderItem } from "@/src/types";
import { cookies } from "next/headers";

export async function createOrderAction(order: OrderItem[]) {
    const token = cookies().get('token')?.value 
    const userId = cookies().get('userId')?.value 
    if (!userId || !token) return;
    return await createOrder({userId, order}, token)
}