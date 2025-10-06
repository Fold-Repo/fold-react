"use client"

import React from "react"
import Link from "next/link"
import { formatCurrency } from "@/lib"
import { ProductType } from "@/types"
import { RatingStars, WishlistButton } from "@/components"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Image } from "@heroui/react"
import { useCart } from "@/store"
import toast from "react-hot-toast"
import { addToCartWithHelper } from "@/utils/helper"

interface ProductCardFourProps {
    product: ProductType
}

const ProductCardFour: React.FC<ProductCardFourProps> = ({ product }) => {

    const { id, name, price, image, category, rating, ratingCount, inStock } = product
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

    const stockStatus = inStock ? "In Stock" : "Back-Order"
    const stockColor = inStock ? "text-green-600" : "text-blue-600"

    return (
        <div className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col">

            <Link href={`/products/${id}`} className="block">
                <Image src={image} alt={name}
                    className="w-full aspect-9/8 object-cover object-top rounded-md"
                />
            </Link>

            <div className="p-0.5 flex flex-col space-y-1.5 flex-grow pt-2 pb-5">

                <div className="inline-flex flex-wrap items-center justify-between gap-2">

                    <p className="text-[12px] underline text-gray-700 dark:text-gray-400">
                        {category}
                    </p>

                    <RatingStars rating={rating} variant="compact" showCount={true} count={ratingCount} size="sm" />

                </div>

                <Link  href={`/products/${id}`}
                    className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-brand line-clamp-1">
                    {name}
                </Link>

                <p className={`text-xs ${stockColor}`}>
                    <span className="font-medium">{stockStatus}</span>
                    <span className="text-gray-600"> · 4 options</span>
                </p>

            </div>

            <div className="px-1 flex items-center justify-between border-t border-gray-300 py-2">

                <span className="text-sm font-inter font-semibold text-gray-800 dark:text-gray-100">
                    {formatCurrency(price)}
                </span>

                <div className="flex items-center gap-3">

                    <WishlistButton variant="solid" product={product} size="sm" />

                    <button  onClick={handleAddToCart}
                        className="cursor-pointer p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        disabled={!inStock}>
                        <ShoppingCartIcon className="size-4 text-brand" />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductCardFour
