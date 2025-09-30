"use client";

import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Breadcrumb, CheckoutAuth, DeliveryInformation, CheckoutPayment, OrderSummary, Button } from "@/components";
import { useCart } from "@/store";

const CheckoutView = () => {

    const { items } = useCart();

    const handlePlaceOrder = () => {
        console.log("Place order clicked");
    };

    return (
        <>
            <Header />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Shopping", href: "/products" },
                    { label: "Cart", href: "/pages/cart" },
                    { label: "Checkout", isActive: true }
                ]}
                separator={<span className="text-gray-400">/</span>}
                variant='center'
            />

            <div className="container section-md space-y-10">
                <div className="flex flex-col lg:flex-row gap-6">
                    
                    {/* ================= CHECKOUT FORMS ================= */}
                    <div className="w-full lg:w-[60%] 2xl:w-[70%] space-y-4" data-aos="fade-right" data-aos-delay="150">
                        
                        {/* ================= AUTH SECTION ================= */}
                        <CheckoutAuth />
                        
                        {/* ================= DELIVERY INFORMATION ================= */}
                        <DeliveryInformation />
                        
                        {/* ================= PAYMENT INFORMATION ================= */}
                        <CheckoutPayment />
                        
                    </div>

                    {/* ================= ORDER SUMMARY ================= */}
                    <div className="w-full lg:w-[40%] 2xl:w-[30%] bg-white dark:bg-gray-800 rounded-xl px-5 sm:px-6 py-6 h-max" data-aos="fade-left" data-aos-delay="200">
                        
                        <OrderSummary items={items} />
                        
                        {/* ================= CHECKOUT BUTTON ================= */}
                        <Button variant="brand" size="lg" 
                            fullWidth  onClick={handlePlaceOrder}  className="mt-6">
                            Place Order Now
                        </Button>
                        
                    </div>
                    
                </div>
                
            </div>

            <Footer />

        </>
    );
};

export default CheckoutView;
