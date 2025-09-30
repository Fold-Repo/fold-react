"use client";

import React, { useState } from "react";
import { PaymentMethods, PayWithOptions, CardPayments, PayOnDelivery } from "@/components";
import { PaymentOption, PaymentMethodType, CardFormData } from "@/types";
import { BanknotesIcon } from "@heroicons/react/24/outline";

interface CheckoutPaymentProps {
    className?: string;
}

const CheckoutPayment: React.FC<CheckoutPaymentProps> = ({ className = "" }) => {
    const [paymentOption, setPaymentOption] = useState<PaymentOption>("card");
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("credit-card");

    const handleCardSubmit = (formData: CardFormData) => {
        console.log("Card payment submitted:", formData);
    };

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 space-y-8 ${className}`}>

            <div className="flex items-center gap-2">
                <BanknotesIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h2 className="text-left text-base md:text-lg font-semibold">Payment Information</h2>
            </div>

            <div className="flex items-center flex-wrap justify-between gap-4">

                <p className="text-base font-medium">Pay With</p>

                <PayWithOptions
                    selectedOption={paymentOption}
                    onOptionChange={(option) => setPaymentOption(option)}
                />

            </div>

            {paymentOption === "card" && (
                <>

                    {/* ================= PAYMENT METHODS ================= */}
                    <PaymentMethods 
                        variant="v1"
                        selectedMethod={selectedMethod}
                        onMethodSelect={(method) => setSelectedMethod(method)}
                    />

                    {/* ================= CARD PAYMENT FORM ================= */}
                    <CardPayments 
                        onSubmit={handleCardSubmit}
                        showButton={false}
                        className="py-5"
                    />
                </>
            )}

            {paymentOption === "delivery" && (
                <PayOnDelivery />
            )}
            
        </div>
    );
};

export default CheckoutPayment;
