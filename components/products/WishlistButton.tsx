"use client";

import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useWishlist } from "@/store";
import { ProductType } from "@/types";
import { cn } from "@/lib";
import toast from "react-hot-toast";

interface WishlistButtonProps {
    product: ProductType;
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline";
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product, className, size = "md", variant = "outline" }) => {

    const { toggleWishlist, checkIfInWishlist } = useWishlist();
    const isInWishlist = checkIfInWishlist(product.id);

    const handleClick = () => {

        toggleWishlist(product);
        
        if (isInWishlist) {
            toast.success(`${product.name} removed from wishlist`);
        } else {
            toast.success(`${product.name} added to wishlist`);
        }
    };

    const sizeClasses = {
        sm: "w-6 h-6 text-xs",
        md: "w-7 h-7 text-base",
        lg: "w-10 h-10 text-lg"
    };

    const variantClasses = {
        solid: isInWishlist 
            ? "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700" 
            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
        outline: isInWishlist
            ? "bg-white dark:bg-gray-800 border border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            : "bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
    };


    return (
        <button
            onClick={handleClick}
            title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            className={cn(
                "cursor-pointer rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0",
                "focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-400/20",
                "shadow-sm dark:shadow-md",
                sizeClasses[size],
                variantClasses[variant],
                className
            )}>
            {isInWishlist ? (
                <HeartIconSolid className={cn(
                    "text-current",
                    size === "sm" ? "size-4" : size === "lg" ? "size-5" : "size-4"
                )} />
            ) : (
                <HeartIcon className={cn(
                    "text-current",
                    size === "sm" ? "size-4" : size === "lg" ? "size-5" : "size-4"
                )} />
            )}

        </button>
    );
};

export default WishlistButton;
