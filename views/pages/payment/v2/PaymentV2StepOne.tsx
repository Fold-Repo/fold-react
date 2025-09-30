"use client";

import React, { useState } from "react";
import { PaymentMethods, CardPayments } from "@/components";
import { PaymentMethodType, CardFormData } from "@/types";

interface PaymentV2StepOneProps {
    onNextStep?: () => void;
}

const PaymentV2StepOne: React.FC<PaymentV2StepOneProps> = ({ onNextStep }) => {

    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("credit-card");

    const handleCardSubmit = (formData: CardFormData) => {
        console.log("Card payment submitted:", formData);
        onNextStep?.();
    };

    return (
        <div className="md:p-5 space-y-8">

            <h2 className="text-base md:text-lg font-semibold">Select Payment Method</h2>

            {/* ================= PAYMENT METHODS ================= */}
            <PaymentMethods 
                variant="v2"
                selectedMethod={selectedMethod}
                onMethodSelect={(method) => setSelectedMethod(method)}
            />

            {/* ================= CARD PAYMENT FORM ================= */}
            {selectedMethod === "credit-card" && (
                <CardPayments 
                    onSubmit={handleCardSubmit}
                    className="mt-12"
                    buttonText="Pay Now"
                />
            )}

            {/* ================= ORDER SUMMARY ================= */}
            <div className="space-y-5 mt-10">
                <div className="border-y border-gray-500 py-5 space-y-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Subtotal (5 items)</span>
                        <span className="text-sm dark:text-gray-300">$1,729.96</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Home delivery cost</span>
                        <span className="text-sm dark:text-gray-300">$5.5</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pb-1">
                    <span className="text-sm text-gray-500">TOTAL AMOUNT</span>
                    <span className="text-sm dark:text-gray-300 font-bold">$66.30</span>
                </div>
            </div>

        </div>
    );
};

export default PaymentV2StepOne;
