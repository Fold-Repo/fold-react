"use client"

import React from "react"
import { SectionTitle } from "@/components"
import { ProductCardFour } from "@/components/cards"
import { useGetHome1PopularProducts } from "@/service"
import { ProductType } from "@/types"
import { PopularProductsSkeleton } from "@/components/skeleton"

const PopularProducts: React.FC = () => {
    const { data: popularData, isLoading } = useGetHome1PopularProducts()
    
    const popularProducts: ProductType[] = popularData?.data || []

    if (isLoading) {
        return <PopularProductsSkeleton />
    }

    return (
        <>
            {/* ================= POPULAR PRODUCTS ================= */}
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="50">

                <SectionTitle title="Popular Products" />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">

                    {popularProducts.map((product, index) => (
                        <ProductCardFour
                            key={product.id}
                            product={product}
                            data-aos="fade-up"
                            data-aos-delay={`${100 + (index * 50)}`}
                        />
                    ))}

                </div>

            </div>
        </>
    )
}

export { PopularProducts }