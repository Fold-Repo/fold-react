"use client";

import React from "react";
import Link from "next/link";
import {  formatCurrency } from "@/lib";
import { ProductType } from "@/types";
import { RatingStars, Button } from "@/components";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Image } from "@heroui/react";

interface Props {
    product: ProductType;
}

const ProductCard: React.FC<Props> = ({ product }) => {

    const { id, name, price, category, ratingCount, image, inStock } = product;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("Add to cart:", product);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 
            dark:border-gray-700 overflow-hidden p-1.5 md:p-3">

            {/* ================= PRODUCT IMAGE ================= */}
            <Image src={image} alt={name} width={500}
            className="w-full aspect-[9/7] object-cover rounded-lg" />

            {/* ================= PRODUCT INFO ================= */}
            <div className="space-y-2 pt-3">

                {/* ================= CATEGORY AND RATING ================= */}
                <div className="flex justify-between gap-2 flex-wrap items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{category}</span>
                    <RatingStars rating={1} variant="single" showCount={true} count={ratingCount} size="sm" />
                </div>

                {/* ================= PRODUCT NAME ================= */}
                <Link href={`/products/${id}`} className="text-sm font-normal text-gray-800 dark:text-gray-200 hover:text-brand leading-snug !line-clamp-1 block">
                    {name}
                </Link>

                {/* ================= PRICE ================= */}
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 font-inter">
                    {formatCurrency(price)}
                </p>

                {/* ================= ADD TO CART BUTTON ================= */}
                <Button 
                    onClick={handleAddToCart} 
                    variant="brand" 
                    size="xs"
                    fullWidth 
                    leftIcon={<ShoppingCartIcon className="w-4 h-4" />}
                    disabled={!inStock}>
                    {inStock ? "Add to Cart" : "Out of Stock"}
                </Button>

            </div>
            
        </div>
    );
};

export default ProductCard;
