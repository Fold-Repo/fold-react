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

const ProductCardSix: React.FC<Props> = ({ product }) => {

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

                <Image src={image} alt={name}
                    width={400} className="w-full aspect-square object-cover object-top rounded-lg"
                    radius="lg"
                />

                {/* ================= FLASH SALE BADGE ================= */}
                <span className="absolute top-2 left-2 inline-flex items-center py-1.5 px-3 rounded-full text-[10px] font-medium bg-[#FF8919] text-white z-10">
                    Flash Sale
                </span>

                {/* ================= WISHLIST BUTTON ================= */}
                <WishlistButton className="absolute top-2 right-2 z-10" product={product} size="md" />
                
            </div>

            <div className="space-y-1 md:space-y-1.5 pt-3">

                {/* ================= PRODUCT NAME ================= */}
                <Link href={`/products/${id}`} className="text-gray-700 dark:text-gray-200 text-sm font-semibold hover:text-brand !line-clamp-1">
                    {name}
                </Link>

                {/* ================= RATING ================= */}
                <div className="flex items-center gap-2">
                    <RatingStars rating={rating} variant="compact" showCount={true} count={ratingCount} size="sm" />
                </div>

                {/* ================= PRICE ================= */}
                <div className="flex items-end gap-2 font-inter">
                    <span className="text-gray-600 dark:text-gray-400 text-sm line-through">
                        {formatCurrency(price * 1.2)}
                    </span>
                    <span className="text-[#4BAF47] text-sm font-semibold">
                        {formatCurrency(price)}
                    </span>
                </div>

                {/* ================= ADD TO CART BUTTON ================= */}
                <Button className="w-full !h-10 mt-3" onClick={handleAddToCart}
                    disabled={!inStock} rightIcon={<ShoppingCartIcon className="w-4 h-4" />}>
                    Add to Cart
                </Button>

            </div>

        </div>
    )
}

export { ProductCardSix }
