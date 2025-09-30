"use client";

import React, { useState } from "react";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib";
import { Button, Input } from "@/components/ui";
import { LockClosedIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

interface CartSummaryProps {
    items: CartItemType[];
    onCheckout: () => void;
    onApplyPromoCode?: (code: string) => void;
    title?: string;
    shippingCost?: number;
    taxRate?: number;
    promoCode?: string;
    onPromoCodeChange?: (code: string) => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
    items,
    onCheckout,
    onApplyPromoCode,
    title = "Order Summary",
    shippingCost = 0,
    taxRate = 0.08,
    promoCode = "",
    onPromoCodeChange
}) => {

    const [promoInput, setPromoInput] = useState(promoCode);
    const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

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

    const handleApplyPromo = () => {
        if (promoInput.trim() && onApplyPromoCode) {
            onApplyPromoCode(promoInput.trim());
            setAppliedPromo(promoInput.trim());
        }
    };

    const handlePromoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPromoInput(value);
        if (onPromoCodeChange) {
            onPromoCodeChange(value);
        }
    };

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="w-full lg:w-[40%] 2xl:w-[30%] bg-white dark:bg-gray-800 rounded-xl px-5 sm:px-6 py-6 h-max">

            <h2 className="text-left text-base md:text-lg font-semibold mb-6">{title}</h2>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="divide-y divide-gray-200 dark:divide-gray-600 space-y-6 mb-10">

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

                {/* ================= APPLIED PROMO CODE ================= */}
                {appliedPromo && (
                    <div className="flex items-center justify-between pb-1">
                        <span className="text-sm text-gray-500">Promo Code ({appliedPromo})</span>
                        <span className="text-sm dark:text-gray-300 text-green-600">Applied</span>
                    </div>
                )}

                {/* ================= TOTAL ================= */}
                <div className="flex items-center justify-between pb-1">
                    <span className="text-sm text-gray-500 font-semibold">Total</span>
                    <span className="text-sm dark:text-gray-300 font-bold">{formatCurrency(total)}</span>
                </div>

            </div>

            {/* ================= PROMO CODE ================= */}
            {onApplyPromoCode && (
                <div className="flex items-center gap-x-2 mb-5">

                    <Input name="promoCode" value={promoInput}
                        onChange={handlePromoInputChange} placeholder="Enter Promo Code"
                        disabled={!!appliedPromo} fullWidth/>

                    <button onClick={handleApplyPromo} disabled={!promoInput.trim() || !!appliedPromo}
                        className="btn bg-brand/20 text text-gray-600 h-11 !px-6">
                        {appliedPromo ? "Applied" : "Apply"}
                    </button>

                </div>
            )}

            {/* ================= CHECKOUT BUTTON ================= */}
            <Button onClick={onCheckout} variant="brand" size="lg" fullWidth className="h-11">
                Proceed to checkout
            </Button>

            {/* ================= SECURITY BADGES ================= */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <LockClosedIcon className="w-4 h-4" />
                        <span>Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        <span>Free Returns</span>
                    </div>
                </div>
            </div>

        </div>
    );
};