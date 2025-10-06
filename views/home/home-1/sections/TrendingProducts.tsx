"use client"

import React from "react"
import { TrendingCard } from "../components"
import { SectionTitle } from "@/components"
import { useGetHome1TrendingProducts } from "@/service"
import { ProductType } from "@/types"
import { TrendingProductsSkeleton } from "@/components/skeleton"

const TrendingProducts: React.FC = () => {
    const { data: trendingData, isLoading } = useGetHome1TrendingProducts()
    
    const trendingProducts: ProductType[] = trendingData?.data || []
    
    // Split products into small cards (first 4) and large cards (remaining)
    const smallCards = trendingProducts.slice(0, 4)
    const largeCards = trendingProducts.slice(4, 7)

    if (isLoading) {
        return <TrendingProductsSkeleton />
    }

    return (
        <>
            {/* ================= TRENDING PRODUCTS ================= */}
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="50">

                <SectionTitle title="Trending Products" />

                {/* Small Cards Grid - 4 cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="100">
                    {smallCards.map((product, index) => (
                        <TrendingCard
                            key={product.id}
                            product={product}
                            variant="small"
                            data-aos="fade-up"
                            data-aos-delay={`${150 + (index * 50)}`}
                        />
                    ))}
                </div>

                {/* Large Cards Grid - 1 left + 2 right stacked */}
                <div className="grid grid-cols-12 gap-4" data-aos="fade-up" data-aos-delay="200">

                    {/* Left Large Card */}
                    {largeCards[0] && (
                        <div className="col-span-12 md:col-span-4">
                            <TrendingCard
                                product={largeCards[0]}
                                variant="large-left"
                            />
                        </div>
                    )}

                    {/* Right Side Cards */}
                    <div className="col-span-12 md:col-span-8 flex flex-col gap-y-4 h-full">

                        {largeCards[1] && (
                            <TrendingCard
                                product={largeCards[1]}
                                variant="large-right"
                            />
                        )}

                        {largeCards[2] && (
                            <TrendingCard
                                product={largeCards[2]}
                                variant="large-right"
                            />
                        )}

                    </div>

                </div>

            </div>
        </>
    )
}

export { TrendingProducts }