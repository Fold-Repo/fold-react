"use client"

import React from "react"
import { ProductCardSeven, SpecialProductsSkeleton } from "@/components"
import { useGetHome3SpecialProducts } from "@/service"

const SpecialProducts: React.FC = () => {
    const { data: specialProducts, isLoading } = useGetHome3SpecialProducts()

    if (isLoading) {
        return <SpecialProductsSkeleton />
    }

    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            {/* ================= SECTION TITLE ================= */}
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-semibold" data-aos="fade-up" data-aos-delay="200">
                Special Products
            </h2>

            {/* ================= PRODUCTS GRID ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {specialProducts?.map((product, index) => (
                    <ProductCardSeven key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

export { SpecialProducts }
