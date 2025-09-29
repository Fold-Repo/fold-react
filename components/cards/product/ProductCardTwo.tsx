"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib";
import { ProductType } from "@/types";
import { RatingStars, Button, ColorSwatch, WishlistButton } from "@/components";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Image } from "@heroui/react";
import { useCart } from "@/store";
import toast from "react-hot-toast";
import { addToCartWithHelper } from "@/utils/helper";

interface ProductCardTwoProps {
    product: ProductType;
}

const ProductCardTwo: React.FC<ProductCardTwoProps> = ({ product }) => {

    const { id, name, price, originalPrice, rating, ratingCount, image, description, colors, inStock } = product;
    const { addItem } = useCart();

    const [currentImage, setCurrentImage] = useState(image);
    const [selectedColor, setSelectedColor] = useState<string | undefined>();

    const handleColorChange = (option: { image: string; color: string }) => {
        setCurrentImage(option.image);
        setSelectedColor(option.color);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCartWithHelper(
            addItem,
            product,
            1,
            selectedColor,
            toast.success
        );
    };

    return (
        <div className="flex flex-col sm:flex-row gap-6">

            {/* ================= PRODUCT IMAGE ================= */}
            <div className="relative">

                <Image isZoomed src={currentImage} alt={name} width={600}
                    className="sm:w-64 aspect-9/7 sm:aspect-9/8 object-cover rounded-lg shadow" />

                {/* ================= WISHLIST BUTTON ================= */}
                <WishlistButton className="absolute top-2 right-2 z-10"
                product={product} size="md" />

            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div className="flex flex-col gap-2 flex-1">

                {/* ================= PRODUCT NAME ================= */}
                <Link href={`/products/${id}`} className="text-base font-medium text-gray-800 
                    dark:text-gray-200 hover:text-brand !line-clamp-1">
                    {name}
                </Link>

                {/* ================= PRODUCT DESCRIPTION ================= */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug !line-clamp-1">
                    {description || ""}
                </p>

                {/* ================= PRICE ================= */}
                <div className="flex items-center gap-2 text-base">
                    {originalPrice && originalPrice && (
                        <span className="text-gray-400 line-through">
                            {formatCurrency(originalPrice)}
                        </span>
                    )}
                    <span className="text-brand font-semibold">
                        {formatCurrency(price)}
                    </span>
                </div>

                {/* ================= COLOR SWATCH ================= */}
                {colors && colors.length > 0 && (
                    <ColorSwatch options={colors} trigger="hover"
                        onColorChange={handleColorChange} variant="circle"
                        showLabel={true} label="Color:" />
                )}

                {/* ================= STOCK STATUS ================= */}
                <p className={`text-sm font-medium ${inStock ? "text-green-600" : "text-red-600"}`}>
                    {inStock ? "In stock" : "Out of stock"}
                </p>

                {/* ================= RATING ================= */}
                <div className="flex items-center gap-2 text-xs">
                    <RatingStars rating={rating} variant="display" size="md" showCount={false} />
                    <span className="font-medium text-gray-900 dark:text-gray-400">
                        {ratingCount} verified ratings
                    </span>
                </div>

                {/* ================= ADD TO CART BUTTON ================= */}
                <Button
                    onClick={handleAddToCart}
                    variant="brand"
                    size="sm"
                    className="!py-2 max-w-full sm:max-w-xs text-white mt-2"
                    leftIcon={<ShoppingCartIcon className="w-4 h-4" />}
                    disabled={!inStock}
                >
                    {inStock ? "Add to Cart" : "Out of Stock"}
                </Button>

            </div>

        </div>
    );
};

export default ProductCardTwo;
