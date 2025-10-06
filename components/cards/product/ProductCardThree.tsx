"use client"

import React from "react"
import Link from "next/link"
import { formatCurrency } from "@/lib"
import { ProductType } from "@/types"
import { RatingStars, Button, WishlistButton } from "@/components"
import { Image } from "@heroui/react"
import { useCart } from "@/store"
import toast from "react-hot-toast"
import { addToCartWithHelper } from "@/utils/helper"

interface Props {
    product: ProductType
}

const ProductCardThree: React.FC<Props> = ({ product }) => {

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
        <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col">

            {/* ================= PRODUCT IMAGE ================= */}
            <div className="relative">

                <Image isZoomed src={image} alt={name} width={400}
                    className="w-full aspect-square object-cover object-top rounded-t-md" radius="sm" />

                {/* ================= WISHLIST BUTTON ================= */}
                <WishlistButton className="absolute top-2 right-2 z-10" product={product} size="md" />

            </div>

            <div className="p-1.5 space-y-1 md:space-y-2">

                {/* ================= PRODUCT NAME ================= */}
                <Link href={`/products/${id}`} className="text-gray-700 dark:text-gray-200 text-sm font-semibold 
                    hover:text-brand !line-clamp-1">
                    {name}
                </Link>

                {/* ================= RATING ================= */}
                <RatingStars rating={rating} variant="single" showCount={true} count={ratingCount} />

                {/* ================= PRICE ================= */}
                <div className="flex items-end gap-2 font-inter">
                    <span className="text-gray-600 dark:text-gray-400 text-sm line-through">{formatCurrency(price)}</span>
                    <span className="text-gray-800 dark:text-gray-100 text-sm font-semibold">{formatCurrency(price)}</span>
                </div>

            </div>

            {/* ================= ADD TO CART BUTTON ================= */}
            <div className="px-2 py-1">
                <Button onClick={handleAddToCart} variant="brand" size="xs" fullWidth disabled={!inStock}>
                    {inStock ? "Buy Now" : "Out of Stock"}
                </Button>
            </div>

        </div>
    )
}

export default ProductCardThree