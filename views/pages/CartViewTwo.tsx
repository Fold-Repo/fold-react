"use client";

import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useRouter } from "next/navigation";
import { Breadcrumb } from "@/components";
import { useCart } from "@/store";
import { CartListV2, CartSummaryV2 } from "@/components/cart";

const CartViewTwo = () => {
    
    const { items, updateItemQuantity, removeItem } = useCart();
    const router = useRouter();

    const handleQuantityChange = (id: string, quantity: number) => {
        updateItemQuantity(id, quantity);
    };

    const handleRemoveItem = (id: string) => {
        removeItem(id);
    };

    const handleCheckout = () => {
        router.push("/pages/cart/checkout");
    };

    const handleContinueShopping = () => {
        router.push("/products");
    };

    const handleShippingChange = (option: "pickup" | "delivery") => {
        console.log("Shipping option changed:", option);
    };

    return (
        <>
            <Header />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Shopping", href: "/products" },
                    { label: "Cart V2", isActive: true }
                ]}
                separator={<span className="text-gray-400">/</span>}
                variant='left'
            />

            <div className="container section-md space-y-8">

                {/* ================= CART LIST ================= */}
                <CartListV2
                    items={items}
                    onQuantityChange={handleQuantityChange}
                    onRemoveItem={handleRemoveItem}
                    onContinueShopping={handleContinueShopping}
                />

                {/* ================= ORDER SUMMARY ================= */}
                {items.length > 0 && (
                    <CartSummaryV2
                        items={items}
                        onCheckout={handleCheckout}
                        onShippingChange={handleShippingChange}
                    />
                )}

            </div>

            <Footer />
        </>
    );
};

export default CartViewTwo;