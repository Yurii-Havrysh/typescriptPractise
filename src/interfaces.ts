import { Product } from "./classes"

export interface ProductInterface {
    name: string,
    price: number,
    image: string,
    description: string
}

export interface ProductListInterface {
    products: any[]
}