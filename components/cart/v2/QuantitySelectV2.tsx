"use client";

import React, { useState, useCallback, memo } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

interface QuantitySelectV2Props {
    initialValue?: number;
    min?: number;
    max?: number;
    onQuantityChange?: (quantity: number) => void;
    disabled?: boolean;
    inStock?: boolean;
}

const QuantitySelectorV2: React.FC<QuantitySelectV2Props> = ({
    initialValue = 1,
    min = 1,
    max = 99,
    onQuantityChange,
    disabled = false,
    inStock = true
}) => {
    const [quantity, setQuantity] = useState(initialValue);

    const handleDecrease = useCallback(() => {
        if (quantity > min && !disabled) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange?.(newQuantity);
        }
    }, [quantity, min, disabled, onQuantityChange]);

    const handleIncrease = useCallback(() => {
        if (quantity < max && !disabled && inStock) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange?.(newQuantity);
        }
    }, [quantity, max, disabled, inStock, onQuantityChange]);

    return (
        <div className="bg-[#E8EBEF] flex items-center justify-between py-2 px-2 
        rounded-lg w-full max-w-full md:max-w-[120px]">

            <button className="cursor-pointer !text-gray-900"
                onClick={handleDecrease} disabled={quantity <= min || disabled}>
                <MinusIcon className="size-4" />
            </button>

            <span className="text-brand font-medium text-sm">{quantity}</span>

            <button className="cursor-pointer text-brand"
                onClick={handleIncrease}
                disabled={quantity >= max || disabled || !inStock}>
                <PlusIcon className="size-4" />
            </button>

        </div>
    );
};

export default memo(QuantitySelectorV2);
