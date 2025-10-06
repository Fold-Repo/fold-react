"use client"

import React from "react"
import { SectionTitle } from "@/components"
import { ProductCardFour } from "@/components/cards"
import { useGetHome2PopularProducts } from "@/service"
import { PopularProductsSkeleton } from "@/components/skeleton"

const PopularProducts: React.FC = () => {
    const { data: products, isLoading } = useGetHome2PopularProducts()

    if (isLoading) {
        return <PopularProductsSkeleton />
    }

    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            {/* ================= SECTION TITLE ================= */}
            <SectionTitle 
                title="Popular Products"
                underlineColor="bg-blue-600"
                underlineWidth="w-20"
            />

            {/* ================= PRODUCTS GRID ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3" data-aos="fade-up" data-aos-delay="200">

                {products?.map((product) => (
                    <ProductCardFour key={product.id} product={product} />
                ))}

            </div>

        </div>
    )
}

export { PopularProducts }
