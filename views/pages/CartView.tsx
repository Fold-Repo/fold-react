"use client";

import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Breadcrumb, CartList, CartSummary, EmptyState } from "@/components";
import { useCart } from "@/store";
import { useRouter } from "next/navigation";

const CartView = () => {

    const { items, updateItemQuantity, removeItem } = useCart();
    const router = useRouter();

    const handleQuantityChange = (id: string, quantity: number) => {
        updateItemQuantity(id, quantity);
    };

    const handleRemoveItem = (id: string) => {
        removeItem(id);
    };

    const handleCheckout = () => {
        router.push("checkout");
    };

    const handleApplyPromoCode = (code: string) => {
        console.log("Applying promo code:", code);
    };

    return (
        <>
            <Header />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Shopping", href: "/products" },
                    { label: "Cart", isActive: true }
                ]}
                separator={<span className="text-gray-400">/</span>}
                variant='center'
            />

            <div className="container section-md space-y-10">

                {items.length === 0 ? (

                    <EmptyState
                        imageSrc="/img/empty.svg"
                        title="Your cart is empty"
                        description="Looks like you haven't added any items to your cart yet."
                        actionLabel="Continue Shopping"
                        actionHref="/products"
                    />

                ) : (
                    <div className="flex flex-col lg:flex-row gap-6">

                        <CartList items={items} onQuantityChange={handleQuantityChange}
                            onRemoveItem={handleRemoveItem} />

                        <CartSummary items={items} onCheckout={handleCheckout}
                            onApplyPromoCode={handleApplyPromoCode} />

                    </div>

                )}

            </div>

            <Footer />
        </>
    );
};

export default CartView;
