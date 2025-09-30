"use client";

import React from "react";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib";
import { Button } from "@/components/ui";
import { ShippingOptions } from "./ShippingOptions";

interface CartSummaryV2Props {
    items: CartItemType[];
    onCheckout: () => void;
    onShippingChange?: (option: "pickup" | "delivery") => void;
    title?: string;
    shippingCost?: number;
    taxRate?: number;
}

export const CartSummaryV2: React.FC<CartSummaryV2Props> = ({
    items,
    onCheckout,
    onShippingChange,
    title = "Order Summary",
    shippingCost = 0,
    taxRate = 0.08
}) => {
    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const savings = items.reduce((sum, item) => {
        const originalPrice = item.product.originalPrice || item.product.price;
        const discount = originalPrice > item.price ? (originalPrice - item.price) * item.quantity : 0;
        return sum + discount;
    }, 0);
    
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-8">

            {/* ================= SHIPPING OPTIONS ================= */}
            <ShippingOptions onShippingChange={onShippingChange} />

            {/* ================= ORDER SUMMARY ================= */}
            <div className="space-y-5">

                <h2 className="text-base md:text-lg font-semibold">{title}</h2>

                <div className="divide-y divide-gray-200 dark:divide-gray-600 mt-8 space-y-6">

                    {/* ================= SUBTOTAL ================= */}
                    <div className="flex items-center justify-between pb-1">
                        <span className="text-sm text-gray-500">Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                        <span className="text-sm dark:text-gray-300">{formatCurrency(subtotal)}</span>
                    </div>

                    {/* ================= SAVINGS ================= */}
                    {savings > 0 && (
                        <div className="flex items-center justify-between pb-1">
                            <span className="text-sm text-gray-500">Savings</span>
                            <span className="text-sm dark:text-gray-300 text-green-600">-{formatCurrency(savings)}</span>
                        </div>
                    )}

                    {/* ================= SHIPPING ================= */}
                    <div className="flex items-center justify-between pb-1">
                        <span className="text-sm text-gray-500">Shipping</span>
                        <span className="text-sm dark:text-gray-300">
                            {shippingCost === 0 ? "Free" : formatCurrency(shippingCost)}
                        </span>
                    </div>

                    {/* ================= TAX ================= */}
                    <div className="flex items-center justify-between pb-1">
                        <span className="text-sm text-gray-500">Tax</span>
                        <span className="text-sm dark:text-gray-300">{formatCurrency(tax)}</span>
                    </div>

                    {/* ================= TOTAL ================= */}
                    <div className="flex items-center justify-between pb-1">
                        <span className="text-sm text-gray-500">Total</span>
                        <span className="text-sm dark:text-gray-300 font-bold">{formatCurrency(total)}</span>
                    </div>

                </div>

                {/* ================= CHECKOUT BUTTON ================= */}
                <div className="flex justify-end">
                    <Button
                        onClick={onCheckout}
                        variant="brand"
                        size="lg"
                        className="!rounded-lg dark:!text-white w-full max-w-xs mt-8 lg:h-10"
                    >
                        Checkout
                    </Button>
                </div>

            </div>

        </div>
    );
};
