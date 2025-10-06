"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib"
import { ProductType } from "@/types"

interface TrendingCardProps {
    product: ProductType
    className?: string
    variant?: "small" | "large-left" | "large-right"
}

const TrendingCard: React.FC<TrendingCardProps> = ({
    product,
    className = "",
    variant = "small"
}) => {
    const { id, name, image, description, isNew } = product
    const badge = isNew ? "NEW" : undefined
    const href = `/products/${id}`

    const getVariantClasses = () => {
        switch (variant) {
            case "small":
                return "aspect-7/8"
            case "large-left":
                return "w-full h-full aspect-7/7 md:aspect-auto"
            case "large-right":
                return "aspect-9/5 md:aspect-9/3 flex-1"
            default:
                return "aspect-7/8"
        }
    }

    return (
        <Link href={href} className={cn("block relative rounded-tl-xl rounded-br-xl overflow-hidden", getVariantClasses(),
            className)}>

            <Image src={image} alt={name} fill className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/30" />

            {badge && (
                <div className="absolute top-3 right-3 bg-white text-gray-800 text-[10px] font-medium px-3 py-1 rounded-full">
                    {badge}
                </div>
            )}

            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-3 px-4">

                <h3 className="text-white text-xl font-medium text-center">
                    {name}
                </h3>

                <div className="w-full bg-black/40 backdrop-blur-md rounded-tl-md rounded-br-md px-4 py-2">
                
                    <p className="text-gray-100 text-xs text-center">
                        {description}
                    </p>

                </div>

            </div>

        </Link>
    )
}

export { TrendingCard }