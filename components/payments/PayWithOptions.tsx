"use client";

import React, { useState, useEffect } from "react";
import Radio from "@/components/ui/form/Radio";
import { PayWithOptionsProps, PaymentOption } from "@/types";

export const PayWithOptions: React.FC<PayWithOptionsProps> = ({
    selectedOption = "card",
    onOptionChange,
    className = ""
}) => {
    const [activeOption, setActiveOption] = useState<PaymentOption>(selectedOption);

    useEffect(() => {
        setActiveOption(selectedOption);
    }, [selectedOption]);

    const handleOptionChange = (option: PaymentOption) => {
        setActiveOption(option);
        onOptionChange?.(option);
    };

    return (
        <div className={`flex items-center flex-wrap justify-between gap-4 ${className}`}>

            {/* ================= PAY WITH LABEL ================= */}
            <p className="text-base font-medium">Pay With</p>

            {/* ================= PAYMENT OPTIONS ================= */}
            <div className="flex items-center flex-wrap gap-x-3 md:gap-x-8 gap-y-4">

                {/* ================= CARD OPTION ================= */}
                <Radio
                    name="payment"
                    value="card"
                    label="Debit or Credit Card"
                    checked={activeOption === "card"}
                    onChange={() => handleOptionChange("card")}
                    labelClassName="text-xs text-gray-900 dark:text-neutral-400"
                    formGroupClass="mb-0"
                />

                {/* ================= DELIVERY OPTION ================= */}
                <Radio
                    name="payment"
                    value="delivery"
                    label="Pay on Delivery"
                    checked={activeOption === "delivery"}
                    onChange={() => handleOptionChange("delivery")}
                    labelClassName="text-xs text-gray-900 dark:text-neutral-400"
                    formGroupClass="mb-0"
                />

            </div>

        </div>
    );
};
