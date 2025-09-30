"use client";

import React, { useState } from "react";
import { useCart } from "@/store";
import { OrderSummary, PaymentMethods, PayWithOptions, CardPayments } from "@/components";
import { PaymentOption, PaymentMethodType, CardFormData } from "@/types";

interface PaymentStepOneProps {
    onNextStep?: () => void;
    onPrevStep?: () => void;
}

const PaymentStepOne: React.FC<PaymentStepOneProps> = ({ onNextStep, onPrevStep }) => {

    const { items } = useCart();
    const [paymentOption, setPaymentOption] = useState<PaymentOption>("card");
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("credit-card");

    const handleCardSubmit = (formData: CardFormData) => {
        console.log("Card payment submitted:", formData);
        // Move to OTP step after card payment
        onNextStep?.();
    };

    const handlePayPalPayment = () => {
        console.log("PayPal payment initiated");
    };

    const handleApplePayPayment = () => {
        console.log("Apple Pay payment initiated");
    };

    const handleGooglePayPayment = () => {
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">

            {/* ================= ORDER SUMMARY ================= */}
            <div className="w-full lg:w-[40%] 2xl:w-[40%] bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-5"
                data-aos="fade-right" data-aos-delay="150">

                <OrderSummary items={items} />

            </div>

            {/* ================= PAYMENT FORM ================= */}
            <div className="w-full lg:w-[60%] 2xl:w-[60%] bg-white dark:bg-gray-800 rounded-xl px-5 sm:px-6 py-10 space-y-10"
                data-aos="fade-left" data-aos-delay="200">

                <h2 className="text-center text-base md:text-lg font-semibold">Payment Method</h2>

                <PayWithOptions
                    selectedOption={paymentOption}
                    onOptionChange={(option) => setPaymentOption(option)}
                />

                {paymentOption === "card" && (
                    <PaymentMethods
                        selectedMethod={selectedMethod}
                        onMethodSelect={(method) => setSelectedMethod(method)}
                    />
                )}

                {/* ================= PAYMENT CONTENT ================= */}
                {(() => {
                    switch (paymentOption) {
                        case "card":
                            return (
                                <div className="mt-12">
                                    {(() => {
                                        switch (selectedMethod) {
                                            case "credit-card":
                                                return (
                                                    <CardPayments
                                                        onSubmit={handleCardSubmit}
                                                        buttonText="Pay with Credit Card"
                                                    />
                                                );
                                            case "paypal":
                                                return null
                                            case "apple-pay":
                                                return null
                                            case "google-pay":
                                                return null
                                        }
                                    })()}
                                </div>
                            );

                        case "delivery":
                            return (
                                <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">

                                    <h3 className="text-lg font-semibold mb-3">Pay on Delivery</h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        You can pay with cash or card when your order is delivered.
                                        Our delivery person will collect the payment at your doorstep.
                                    </p>

                                    <div className="space-y-3 text-xs text-gray-600 dark:text-gray-400">
                                        <p>• Cash payment accepted</p>
                                        <p>• Card payment accepted (POS available)</p>
                                        <p>• No additional charges</p>
                                    </div>

                                </div>
                            );

                        default:
                            return (
                                <CardPayments
                                    onSubmit={handleCardSubmit}
                                    buttonText="Pay Now"
                                />
                            );
                    }
                })()}

            </div>

        </div>
    );
};

export default PaymentStepOne;