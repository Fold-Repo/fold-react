"use client"

import React from "react"
import { ProductCardSix, DealsYouCantMissSkeleton } from "@/components"
import { useGetHome3DealsProducts } from "@/service"

const DealsYouCantMiss: React.FC = () => {

    const { data: dealsProducts, isLoading } = useGetHome3DealsProducts()

    if (isLoading) {
        return <DealsYouCantMissSkeleton />
    }

    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            {/* ================= SECTION TITLE ================= */}
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-semibold" data-aos="fade-up" data-aos-delay="200">
                Deals You Can't Miss!
            </h2>

            {/* ================= PRODUCTS GRID ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {dealsProducts?.map((product, index) => (
                    <ProductCardSix key={index} product={product} />
                ))}
            </div>

        </div>
    )
}

export { DealsYouCantMiss }
