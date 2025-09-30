"use client";

import React from "react";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib";
import { OrderCard } from "@/components";

interface OrderSummaryProps {
    items: CartItemType[];
    title?: string;
    shippingCost?: number;
    taxRate?: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
    items,
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

    return (
        <>

            {/* ================= HEADER ================= */}
            <h2 className="text-base md:text-lg font-semibold mb-5">{title}</h2>

            {/* ================= ORDER ITEMS ================= */}
            <div className="space-y-2">
                {items.map((item) => (
                    <OrderCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

            {/* ================= ORDER TOTALS ================= */}
            <div className="divide-y divide-gray-200 dark:divide-gray-600 mt-7 space-y-6">

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

        </>
    );
};
