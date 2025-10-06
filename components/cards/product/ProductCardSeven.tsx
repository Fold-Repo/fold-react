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
import { useRouter } from "next/navigation"

interface Props {
    product: ProductType
    showFlashSale?: boolean
}

const ProductCardSeven: React.FC<Props> = ({ product, showFlashSale = true }) => {

    const { id, name, price, rating, ratingCount, image, inStock, category } = product
    const { addItem } = useCart()

    const router = useRouter()

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

    const handleBuyNow = (e: React.MouseEvent) => {
        e.preventDefault()
        addToCartWithHelper(
            addItem,
            product,
            1,
            undefined,
            toast.success,
            router.push
        )
    }

    return (
        <div className="relative p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col">

            {/* ================= PRODUCT IMAGE ================= */}
            <div className="relative">

                <Image src={image} alt={name} width={400}
                    className="w-full aspect-square object-cover object-top rounded-lg"
                    radius="lg"
                />

                {/* ================= FLASH SALE BADGE ================= */}
                {showFlashSale && (
                    <span className="absolute top-2 left-2 inline-flex items-center py-1.5 px-3 rounded-full text-[11px] font-medium bg-[#FF8919] text-white z-10">
                        Flash Sale
                    </span>
                )}

                {/* ================= WISHLIST BUTTON ================= */}
                <WishlistButton className="absolute top-2 right-2 z-10" product={product} />

            </div>

            <div className="p-0.5 flex flex-col space-y-2 flex-grow pt-3">

                {/* ================= CATEGORY AND RATING ================= */}
                <div className="inline-flex flex-wrap items-center justify-between gap-2">

                    <p className="text-[12px] underline text-gray-700 dark:text-gray-400">
                        {category}
                    </p>

                    <div className="flex items-center gap-1 text-[12px]">
                        <RatingStars rating={rating} variant="compact" showCount={true} count={ratingCount} size="sm" />
                    </div>

                </div>

                {/* ================= PRODUCT NAME ================= */}
                <Link href={`/products/${id}`} className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-brand line-clamp-1">
                    {name}
                </Link>

                {/* ================= PRICE ================= */}
                <div className="flex items-end gap-2 font-inter">
                    <span className="text-gray-600 dark:text-gray-400 text-sm line-through">
                        {formatCurrency(price * 1.2)}
                    </span>
                    <span className="text-[#4BAF47] text-sm font-semibold">
                        {formatCurrency(price)}
                    </span>
                </div>

            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="px-1 flex flex-wrap lg:flex-nowrap items-center justify-between gap-1 py-2 mt-3">

                <Button size="sm" className="h-9 w-full" variant="outline-brand"
                    onClick={handleBuyNow} disabled={!inStock}>
                    Buy Now
                </Button>

                <Button size="sm" className="h-9 w-full"onClick={handleAddToCart}
                    disabled={!inStock}>
                    Add to Cart
                </Button>

            </div>

        </div>
    )
}

export { ProductCardSeven }
