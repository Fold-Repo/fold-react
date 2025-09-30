"use client";

import React, { useState } from "react";

interface ShippingOptionsProps {
    onShippingChange?: (option: "pickup" | "delivery") => void;
}

export const ShippingOptions: React.FC<ShippingOptionsProps> = ({ onShippingChange }) => {
    const [selectedOption, setSelectedOption] = useState<"pickup" | "delivery" | null>(null);

    const handleOptionChange = (option: "pickup" | "delivery") => {
        setSelectedOption(option);
        onShippingChange?.(option);
    };

    return (
        <div className="space-y-5 border-b border-gray-200 pb-3">

            {/* ================= TITLE ================= */}
            <h2 className="text-base md:text-lg font-semibold">Select Mode of shipping</h2>

            <div className="mt-7 space-y-4">

                {/* ================= STORE PICKUP ================= */}
                <div className="flex">
                    <input 
                        type="radio" 
                        name="shipping"
                        className="form-check size-4 !rounded-xl" 
                        id="pickup"
                        checked={selectedOption === "pickup"}
                        onChange={() => handleOptionChange("pickup")}
                    />
                    <label htmlFor="pickup" className="text-xs text-gray-500 ms-2 dark:text-neutral-400">
                        Store Pickup (less than 20 min) – Free
                    </label>
                </div>

                {/* ================= HOME DELIVERY ================= */}
                <div className="flex">
                    <input 
                        type="radio" 
                        name="shipping"
                        className="form-check size-4 !rounded-xl" 
                        id="home-delivery"
                        checked={selectedOption === "delivery"}
                        onChange={() => handleOptionChange("delivery")}
                    />
                    <label htmlFor="home-delivery" className="text-xs text-gray-500 ms-2 dark:text-neutral-400">
                        Home Delivery (1–2 days) – 45 Glenridge Ave, Brooklyn, NY
                    </label>
                </div>

            </div>

        </div>
    );
};
