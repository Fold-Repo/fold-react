"use client";

import React from "react";
import { CartItem as CartItemType } from "@/types/cart";
import { CartItem } from "./CartItem";

interface CartListProps {
    items: CartItemType[];
    onQuantityChange: (id: string, quantity: number) => void;
    onRemoveItem: (id: string) => void;
    title?: string;
    showItemCount?: boolean;
}

export const CartList: React.FC<CartListProps> = ({ items, onQuantityChange, onRemoveItem,
    title = "My Cart", showItemCount = true }) => {

    const itemCount = items.reduce((total, item) => total + item.quantity, 0);


    return (
        <div className="w-full lg:w-[60%] 2xl:w-[70%] bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-5">

            <div className="flex items-center gap-2 justify-between mb-8">

                <h2 className="text-base md:text-lg font-semibold">{title}</h2>

                {showItemCount && (
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium 
                    bg-brand/20 text-brand">
                        {itemCount} {itemCount === 1 ? "Item" : "Items"}
                    </span>
                )}

            </div>

            <div className="space-y-2">

                {items.map((item) => (

                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={onQuantityChange}
                        onRemove={onRemoveItem}
                    />
                    
                ))}

            </div>
            
        </div>
    );
};
