"use client"

import React from "react"
import { SectionTitle } from "@/components"
import { ProductCardFive } from "@/components/cards"
import { useGetHome2BestCategories } from "@/service"
import { BestCategoriesSkeleton } from "@/components/skeleton"

const BestCategories: React.FC = () => {
    const { data: products, isLoading } = useGetHome2BestCategories()

    if (isLoading) {
        return <BestCategoriesSkeleton />
    }

    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            {/* ================= SECTION TITLE ================= */}
            <SectionTitle 
                title="Best Categories for you"
                underlineColor="bg-blue-600"
                underlineWidth="w-20"
            />

            {/* ================= PRODUCTS GRID ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2" data-aos="fade-up" data-aos-delay="200">

                {products?.map((product) => (
                    <ProductCardFive key={product.id} product={product} />
                ))}

            </div>

        </div>
    )
}

export { BestCategories }
