"use client";

import React from "react";
import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cart";
import { QuantitySelectorV2 } from "./v2";
import { TrashIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/lib";
import { Button } from "@/components/ui";
import Link from "next/link";

interface CartItemProps {
    item: CartItemType;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
    item,
    onQuantityChange,
    onRemove
}) => {
    const { product, quantity, price } = item;

    const handleQuantityChange = (newQuantity: number) => {
        onQuantityChange(item.id, newQuantity);
    };

    const handleRemove = () => {
        onRemove(item.id);
    };

    const originalPrice = product.originalPrice || product.price;
    const discount = originalPrice > price ? originalPrice - price : 0;

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-3 bg-white dark:bg-gray-700 w-full">

            {/* ========= CART ITEM WRAPPER ========= */}
            <div className="flex gap-3 flex-1">

                {/* ========= PRODUCT IMAGE ========= */}
                <div className="w-26 md:w-44 h-26 md:h-36 shrink-0 overflow-hidden rounded-md bg-gray-100">

                    <Image src={product.image} alt={product.name}
                        width={176} height={144} className="h-full w-full object-cover" />

                </div>

                {/* ========= PRODUCT DETAILS & ACTIONS ========= */}
                <div className="flex flex-col justify-between flex-1">

                    {/* ========= TITLE, DESCRIPTION & PRICING ========= */}
                    <div className="flex flex-wrap items-center justify-between gap-2">

                        {/* ========= PRODUCT TITLE & DESCRIPTION ========= */}
                        <div className="space-y-1">

                            <Link href={`/products/${product.id}`} className="text-sm md:text-base font-semibold text-gray-800 
                            dark:text-gray-300 !line-clamp-1 hover:!text-brand">
                                {product.name}
                            </Link>

                            <p className="text-[12px] md:text-xs text-gray-500 dark:text-gray-400 !line-clamp-1">
                                {product.category}
                            </p>

                        </div>

                        {/* ========= PRICE & DISCOUNT ========= */}
                        <div className="flex flex-col items-end gap-1 font-inter">

                            <h2 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-gray-200">

                                {discount > 0 && (
                                    <span className="text-[11px] lg:text-xs font-light text-gray-600 dark:text-gray-300 line-through pr-1">
                                        {formatCurrency(originalPrice)}
                                    </span>
                                )}

                                {formatCurrency(price)}

                            </h2>

                            {discount > 0 && (
                                <span className="hidden md:inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded-full font-medium text-[10px] bg-green-100 text-green-600">
                                    -{formatCurrency(discount)}
                                </span>
                            )}

                        </div>

                    </div>
                    {/* ========= END TITLE, DESCRIPTION & PRICING ========= */}

                    {/* ========= QUANTITY CONTROL & REMOVE BUTTON ========= */}
                    <div className="flex items-center flex-wrap md:flex-nowrap justify-between gap-1 mt-3">

                        <QuantitySelectorV2 initialValue={quantity} min={1}
                            max={99} onQuantityChange={handleQuantityChange} />

                        <Button onClick={handleRemove}
                            size="sm" leftIcon={<TrashIcon className="w-4 h-4" />}
                            className="!px-3 !h-9 !bg-[#FFD7D7] !text-xs !text-red-500 !gap-0.5 w-full md:w-auto" >
                            Remove
                        </Button>

                    </div>
                    {/* ========= END QUANTITY CONTROL & REMOVE BUTTON ========= */}

                </div>
                {/* ========= END PRODUCT DETAILS & ACTIONS ========= */}

            </div>
            {/* ========= END CART ITEM WRAPPER ========= */}

        </div>
    );
};