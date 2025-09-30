"use client";

import React, { useState } from "react";
import { Button, Input } from "@/components/ui";
import { CardPaymentsProps, CardFormData } from "@/types";

export const CardPayments: React.FC<CardPaymentsProps> = ({
    showButton = true,
    buttonText = "Pay Now",
    buttonVariant = "brand",
    buttonSize = "lg",
    onSubmit,
    className = "",
    initialData = {}
}) => {
    const [formData, setFormData] = useState<CardFormData>({
        cardNumber: initialData.cardNumber || "",
        cardholder: initialData.cardholder || "",
        expiryDate: initialData.expiryDate || "",
        cvv: initialData.cvv || ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 md:space-y-6 ${className}`}>

            {/* ================= CARD NUMBER ================= */}
            <Input
                name="cardNumber"
                label="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="4242 4242 4242 4242"
                required
            />

            {/* ================= CARDHOLDER NAME ================= */}
            <Input
                name="cardholder"
                label="Cardholder"
                value={formData.cardholder}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
            />

            {/* ================= EXPIRY DATE & CVV ================= */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">

                <Input
                    name="expiryDate"
                    label="Expiry Date"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="12/32"
                    required
                />

                <Input
                    name="cvv"
                    label="CVV"
                    type="password"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="***"
                    required
                />

            </div>

            {/* ================= SUBMIT BUTTON ================= */}
            {showButton && (
                <Button type="submit"variant={buttonVariant}  size={buttonSize}
                    fullWidth className="mt-8">
                    {buttonText}
                </Button>
            )}

        </form>
    );
};
