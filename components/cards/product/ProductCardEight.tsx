"use client"

import React from "react"
import Link from "next/link"
import { formatCurrency } from "@/lib"
import { ProductType } from "@/types"
import { RatingStars, Button, WishlistButton } from "@/components"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Image } from "@heroui/react"
import { useCart } from "@/store"
import toast from "react-hot-toast"
import { addToCartWithHelper } from "@/utils/helper"

interface Props {
    product: ProductType
}

const ProductCardEight: React.FC<Props> = ({ product }) => {

    const { id, name, price, rating, ratingCount, image, inStock } = product
    const { addItem } = useCart()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        addToCartWithHelper(
            addItem,
            product,
            1,
            undefined,
            toast.success
        )
    }

    return (
        <div className="relative p-1.5 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col">

            {/* ================= PRODUCT IMAGE ================= */}
            <div className="relative">
                <Image 
                    src={image} 
                    alt={name} 
                    width={300}
                    className="w-full aspect-7/7 object-cover object-top rounded-lg"
                />
                
                {/* ================= WISHLIST BUTTON ================= */}
                <WishlistButton className="absolute top-2 right-2 z-10" product={product} size="sm" />
            </div>

            <div className="space-y-1 md:space-y-1.5 pt-3">

                {/* ================= PRODUCT NAME AND RATING ================= */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <Link href={`/products/${id}`} className="text-gray-700 dark:text-gray-200 
                        text-sm font-semibold hover:text-brand !line-clamp-1">
                        {name}
                    </Link>
                    
                    <RatingStars rating={rating} variant="compact" showCount={true} count={ratingCount} size="sm" />
                </div>

                {/* ================= PRICE ================= */}
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {formatCurrency(price)}
                </span>

                {/* ================= ADD TO CART BUTTON ================= */}
                <Button 
                    onClick={handleAddToCart} 
                    variant="brand" 
                    size="sm" 
                    fullWidth 
                    disabled={!inStock}
                    className="!h-10 mt-3"
                >
                    Add to Cart
                    <ShoppingCartIcon className="size-4" />
                </Button>

            </div>

        </div>
    )
}

export default ProductCardEight
