import { ProductType, ProductColor } from "./product";

export interface CartItem {
    id: string;
    product: ProductType;
    quantity: number;
    selectedColor?: ProductColor; // Only full color object
    selectedSize?: string;
    price: number;
}

export type CartState = {
    items: CartItem[];
    total: number;
    totalPrice: number;
};

