"use client";

import React from "react";
import Image from "next/image";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib";
import { QuantitySelector } from "@/components/cart";
import { Button } from "@/components/ui";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface CartItemV2Props {
    item: CartItemType;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export const CartItemV2: React.FC<CartItemV2Props> = ({ item, onQuantityChange, onRemove }) => {

    const { product, quantity, selectedColor, selectedSize, price } = item;

    const handleQuantityChange = (newQuantity: number) => {
        onQuantityChange(item.id, newQuantity);
    };

    const handleRemove = () => {
        onRemove(item.id);
    };

    const originalPrice = product.originalPrice || product.price;
    const discount = originalPrice > price ? originalPrice - price : 0;
    const itemTotal = price * quantity;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 py-2 gap-4 px-5">

            {/* ================= PRODUCT INFO ================= */}
            <div className="flex items-start gap-4">

                <Image src={product.image}
                    alt={product.name} width={96}
                    height={96} className="object-cover aspect-square size-24 rounded-lg" />

                <div className="space-y-1.5">

                    <Link href={`/products/${product.id}`} className="text-base font-semibold text-gray-900 !line-clamp-1 hover:!text-brand">
                        {product.name}
                    </Link>

                    <p className="text-xs text-gray-600 pb-0.5">{product.category}</p>

                    {/* ================= COLOR ================= */}
                    {selectedColor && (
                        <div className="flex items-center gap-x-2 font-inter">
                            <h6 className="text-xs text-gray-900">Color:</h6>
                            <div className="inline-flex items-center gap-x-1">
                                <div
                                    className="size-4 rounded-full"
                                    style={{ backgroundColor: selectedColor.color }}
                                ></div>
                                <p className="text-gray-900 text-xs">{selectedColor.label}</p>
                            </div>
                        </div>
                    )}

                    {/* ================= SIZE ================= */}
                    {selectedSize && (
                        <div className="flex items-center gap-x-2 font-inter">
                            <h6 className="text-xs text-gray-900">Size:</h6>
                            <p className="text-gray-900 text-xs">{selectedSize}</p>
                        </div>
                    )}

                </div>

            </div>

            {/* ================= ACTIONS & PRICING ================= */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-2 w-full pt-2 divide-y 
            lg:divide-y-0 divide-gray-200 dark:divide-gray-700 lg:pt-0">

                {/* ================= PRICE ================= */}
                <div className="flex items-center justify-between lg:justify-center text-sm lg:text-base w-full lg:max-w-[150px] text-left sm:text-center pb-2 lg:pb-0">
                    <span className="block lg:hidden">Price</span>
                    <div className="flex flex-col gap-y-0.5 text-right font-inter">
                        <span className="font-semibold text-base lg:text-[16px]">{formatCurrency(price)}</span>
                        {discount > 0 && (
                            <span className="text-[12px] line-through text-gray-600">{formatCurrency(originalPrice)}</span>
                        )}
                    </div>
                </div>

                {/* ================= QUANTITY ================= */}
                <div className="flex items-center justify-between w-full lg:justify-center text-sm lg:text-base pb-3 lg:pb-0">

                    <span className="block lg:hidden">Quantity</span>

                    <QuantitySelector initialValue={quantity}
                        min={1} max={99}
                        onQuantityChange={handleQuantityChange}
                        size="sm" showLabel={false} inStock={product.inStock}
                        className="border border-gray-300 text-xs rounded-xl p-1" />

                </div>

                {/* ================= TOTAL ================= */}
                <div className="flex items-center justify-between lg:justify-center text-sm lg:text-base 
                    w-full lg:max-w-[200px] text-right pb-2 lg:pb-0">
                    <span className="block lg:hidden">Total</span>
                    <h3 className="font-semibold text-base lg:text-[16px] font-inter">{formatCurrency(itemTotal)}</h3>
                </div>

                {/* ================= ACTION ================= */}
                <div className="flex items-center justify-between lg:justify-center text-sm lg:text-base w-full lg:max-w-[200px] text-right">

                    <span className="block lg:hidden">Action</span>

                    <Button onClick={handleRemove}
                        variant="ghost" size="sm"
                        className="cursor-pointer !bg-[#FFD7D7] !text-red-600 size-6 !rounded-md flex items-center 
                        justify-center gap-1 !p-0">
                        <TrashIcon className="w-4 h-4" />
                    </Button>

                </div>

            </div>

        </div>
    );
};
