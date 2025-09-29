"use client";

import React, { useState, useCallback, memo } from "react";
import { cn } from "@/lib";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface QuantitySelectorProps {
    initialValue?: number;
    min?: number;
    max?: number;
    onQuantityChange?: (quantity: number) => void;
    className?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    showLabel?: boolean;
    inStock?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    initialValue = 1,
    min = 1,
    max = 99,
    onQuantityChange,
    className,
    size = "md",
    disabled = false,
    showLabel = true,
    inStock = true
}) => {
    const [quantity, setQuantity] = useState(initialValue);

    const sizeClasses = {
        sm: {
            container: "text-xs",
            button: "py-1.5 px-2",
            icon: "w-3 h-3"
        },
        md: {
            container: "text-sm",
            button: "py-1.5 px-2.5",
            icon: "w-4 h-4"
        },
        lg: {
            container: "text-base",
            button: "py-1.5 px-3",
            icon: "w-4 h-4"
        }
    };

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
        <div className={cn("flex items-center gap-4", sizeClasses[size].container, className)}>

            {showLabel && <span className="font-semibold text-gray-900 dark:text-gray-200">Quantity:</span>}

            <div className="flex items-center justify-center border border-gray-300 dark:border-gray-600 
            rounded-lg overflow-hidden p-1">

                <button
                    onClick={handleDecrease}
                    disabled={quantity <= min || disabled}
                    className={cn(
                        "cursor-pointer rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                        "hover:bg-gray-300 dark:hover:bg-gray-600",
                        sizeClasses[size].button
                    )}>
                    <MinusIcon className={sizeClasses[size].icon} />
                </button>

                <span className="w-12 text-center bg-transparent outline-none font-semibold font-inter text-xs">{quantity}</span>

                <button
                    onClick={handleIncrease}
                    disabled={quantity >= max || disabled || !inStock}
                    className={cn(
                        "cursor-pointer rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        "text-white bg-red-500 hover:bg-red-600",
                        "disabled:bg-gray-400 disabled:hover:bg-gray-400",
                        sizeClasses[size].button
                    )}>
                    <PlusIcon className={sizeClasses[size].icon} />
                </button>

            </div>

            {/* {showStockStatus && (
                <div className={cn(
                    "flex items-center gap-1 font-medium text-sm",
                    inStock ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                )}>
                    <div className={cn(
                        "w-4 h-4 rounded-full flex items-center justify-center",
                        inStock ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"
                    )}>
                        {inStock ? (
                            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <span>{inStock ? "In stock" : "Out of stock"}</span>
                </div>
            )} */}
        </div>
    );
};

export default memo(QuantitySelector);
