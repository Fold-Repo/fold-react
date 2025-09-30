"use client";

import React from "react";
import { CartItem as CartItemType } from "@/types";
import { CartItemV2 } from "./CartItemV2";
import { Button } from "@/components/ui";
import { EmptyState } from "@/components";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface CartListV2Props {
    items: CartItemType[];
    onQuantityChange: (id: string, quantity: number) => void;
    onRemoveItem: (id: string) => void;
    onContinueShopping: () => void;
    title?: string;
}

export const CartListV2: React.FC<CartListV2Props> = ({
    items,
    onQuantityChange,
    onRemoveItem,
    onContinueShopping,
    title = "My Cart"
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl space-y-6">

            {/* ================= HEADER ================= */}
            <div className="flex items-center justify-between gap-2 p-5">
                <h2 className="text-center text-base md:text-lg font-semibold">{title}</h2>
                <Button
                    onClick={onContinueShopping}
                    variant="brand"
                    size="sm"
                    leftIcon={<ArrowLeftIcon className="w-4 h-4" />}>
                    Continue Shopping
                </Button>
            </div>

            <div className="w-full">

                {/* ================= CART HEADER ================= */}
                <div className="hidden lg:grid grid-cols-2 py-2.5 font-semibold text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 px-5">
                    <div>Product</div>
                    <div className="flex items-center justify-between">
                        <span className="w-full max-w-[200px] text-center">Price</span>
                        <span className="w-full max-w-[260px] text-center">Quantity</span>
                        <span className="w-full max-w-[200px] text-center">Total</span>
                        <span className="w-full max-w-[200px] text-center">Action</span>
                    </div>
                </div>

                {/* ================= CART ITEMS ================= */}
                <div className="grid grid-cols-1 gap-y-2 divide-y divide-gray-300 dark:divide-gray-700 py-2">

                    {items.length === 0 ? (

                        <div className="py-12 px-5">
                            <EmptyState
                                imageSrc="/img/empty.svg"
                                title="Your cart is empty"
                                description="Looks like you haven't added any items to your cart yet."
                                actionLabel="Continue Shopping"
                                actionHref="/products"
                            />
                        </div>

                    ) : (
                        items.map((item) => (
                            <CartItemV2
                                key={item.id}
                                item={item}
                                onQuantityChange={onQuantityChange}
                                onRemove={onRemoveItem}
                            />
                        ))
                    )}
                </div>

            </div>

        </div>
    );
};
