"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PaymentMethodsProps, PaymentMethod, PaymentMethodType } from "@/types";

const paymentMethods: PaymentMethod[] = [
    {
        id: "credit-card",
        name: "Credit Card",
        icon: "/icon/payment/credit-card.png",
        alt: "Credit card"
    },
    {
        id: "paypal",
        name: "Paypal",
        icon: "/icon/payment/paypal.png",
        alt: "Paypal"
    },
    {
        id: "apple-pay",
        name: "Apple Pay",
        icon: "/icon/payment/apple-pay.png",
        alt: "Apple Pay"
    },
    {
        id: "google-pay",
        name: "Google Pay",
        icon: "/icon/payment/google-pay.png",
        alt: "Google Pay"
    }
];

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({
    variant = "v1",
    selectedMethod = "credit-card",
    onMethodSelect,
    className = ""
}) => {
    const [activeMethod, setActiveMethod] = useState<PaymentMethodType>(selectedMethod);

    useEffect(() => {
        setActiveMethod(selectedMethod);
    }, [selectedMethod]);

    const handleMethodClick = (methodId: PaymentMethodType) => {
        setActiveMethod(methodId);
        onMethodSelect?.(methodId);
    };

    const getIconSize = (methodId: PaymentMethodType, variant: "v1" | "v2") => {
        if (variant === "v2") {
            switch (methodId) {
                case "credit-card":
                    return "w-9";
                case "paypal":
                    return "w-8";
                case "apple-pay":
                    return "w-10";
                case "google-pay":
                    return "w-12";
                default:
                    return "w-9";
            }
        } else {
            switch (methodId) {
                case "credit-card":
                    return "w-8 h-8";
                case "paypal":
                    return "w-6 h-6";
                case "apple-pay":
                    return "w-8 h-8";
                case "google-pay":
                    return "w-10 h-10";
                default:
                    return "w-8 h-8";
            }
        }
    };

    const renderPaymentMethod = (method: PaymentMethod) => {

        const isActive = activeMethod === method.id;
        const iconSize = getIconSize(method.id as PaymentMethodType, variant);
        
        const baseClasses = "cursor-pointer transition hover:scale-105";
        const activeClasses = "bg-[#EDF6FF] dark:bg-gray-700 border border-brand";
        const inactiveClasses = "bg-gray-100 dark:bg-gray-700";

        if (variant === "v2") {
            return (
                <button
                    key={method.id}
                    onClick={() => handleMethodClick(method.id as PaymentMethodType)}
                    className={`w-full h-20 rounded-lg flex flex-col items-center justify-center gap-2 ${baseClasses} ${
                        isActive ? activeClasses : inactiveClasses
                    }`}>
                    <Image
                        src={method.icon}
                        alt={method.alt}
                        width={36}
                        height={36}
                        className={`object-contain ${iconSize}`}
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {method.name}
                    </span>
                </button>
            );
        }

        // V1 variant (default)
        return (
            <button
                key={method.id}
                onClick={() => handleMethodClick(method.id as PaymentMethodType)}
                className={`px-4 h-12 rounded-lg flex items-center justify-center gap-2 ${baseClasses} ${
                    isActive ? activeClasses : inactiveClasses
                }`}>
                <Image
                    src={method.icon}
                    alt={method.alt}
                    width={32}
                    height={32}
                    className={`object-contain ${iconSize}`}
                />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {method.name}
                </span>
            </button>
        );
    };

    switch (variant) {
        case "v2":
            return (
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
                    {paymentMethods.map(renderPaymentMethod)}
                </div>
            );
        
        case "v1":
        default:
            return (
                <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
                    {paymentMethods.map(renderPaymentMethod)}
                </div>
            );
    }
};
