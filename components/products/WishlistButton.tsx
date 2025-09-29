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
        sm: "w-6 h-6 text-sm",
        md: "w-7 h-7 text-base",
        lg: "w-10 h-10 text-lg"
    };

    const variantClasses = {
        solid: isInWishlist 
            ? "bg-red-500 text-white hover:bg-red-600" 
            : "bg-gray-100 text-gray-600 hover:bg-gray-200",
        outline: isInWishlist
            ? "bg-white border border-red-500 text-red-500"
            : "bg-white border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-100 "
    };


    return (
        <button
            onClick={handleClick}
            title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            className={cn(
                "cursor-pointer rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0",
                "focus:outline-none",
                sizeClasses[size],
                variantClasses[variant],
                className
            )}>
            {isInWishlist ? (
                <HeartIconSolid className={cn(
                    size === "sm" ? "size-5" : size === "lg" ? "size-5" : "size-4"
                )} />
            ) : (
                <HeartIcon className={cn(
                    size === "sm" ? "size-5" : size === "lg" ? "size-5" : "size-4"
                )} />
            )}

        </button>
    );
};

export default WishlistButton;
