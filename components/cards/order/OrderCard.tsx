"use client";

import React from "react";
import Image from "next/image";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib";

interface OrderCardProps {
    item: CartItemType;
    className?: string;
}

export const OrderCard: React.FC<OrderCardProps> = ({ item, className = "" }) => {
    const { product, quantity, selectedColor, selectedSize, price } = item;
    
    const itemTotal = price * quantity;

    return (
        <div className={`flex flex-col sm:flex-row sm:items-start sm:justify-between border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900 w-full ${className}`}>

            {/* ================= PRODUCT INFO ================= */}
            <div className="flex gap-3 flex-1">

                {/* ================= PRODUCT IMAGE ================= */}
                <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={80}
                    className="w-24 h-20 object-cover rounded-md"
                />

                {/* ================= PRODUCT DETAILS ================= */}
                <div className="flex flex-col justify-between flex-1">

                    {/* ================= PRODUCT TITLE & DESCRIPTION ================= */}
                    <div className="space-y-0.5">
                        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                            {product.name}
                        </h2>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400">
                            {product.category}
                        </p>
                        
                        {/* ================= SELECTED OPTIONS ================= */}
                        {(selectedColor || selectedSize) && (
                            <div className="flex gap-2 text-[11px] text-gray-600 dark:text-gray-400">
                                {selectedColor && (
                                    <div className="flex items-center gap-1">
                                        <div 
                                            className="w-3 h-3 rounded-full border border-gray-300" 
                                            style={{ backgroundColor: selectedColor.color }}
                                        ></div>
                                        <span>{selectedColor.label}</span>
                                    </div>
                                )}
                                {selectedSize && (
                                    <span>Size: {selectedSize}</span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* ================= QUANTITY & PRICE (MOBILE) ================= */}
                    <div className="flex items-center gap-2 justify-between">

                        <h4 className="text-xs font-light text-gray-600 dark:text-gray-400">
                            Qty: {quantity}
                        </h4>

                        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 block sm:hidden">
                            {formatCurrency(itemTotal)}
                        </h2>

                    </div>

                </div>

            </div>

            {/* ================= PRICE (DESKTOP) ================= */}
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 hidden sm:block">
                {formatCurrency(itemTotal)}
            </h2>

        </div>
    );
};
