"use client"

import React from "react"
import { ProductCardSeven, NewArrivalsSkeleton } from "@/components"
import { useGetHome7NewArrivals } from "@/service"

const DiscoverNewArrivalsSection: React.FC = () => {
    
    const { data: products, isLoading } = useGetHome7NewArrivals()

    if (isLoading) {
        return <NewArrivalsSkeleton />
    }

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-lg mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    Discover New Arrivals
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Recently added shirts!
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2" data-aos="fade-up" data-aos-delay="300">
                
                {products?.map((product) => (
                    <ProductCardSeven 
                        key={product.id} 
                        product={product}
                        showFlashSale={false}
                    />
                )) || []}
                
            </div>
            
        </div>
    )
}

export { DiscoverNewArrivalsSection }
