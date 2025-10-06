"use client"

import React from "react"
import Link from "next/link"
import { ProductCardSeven, BestSellerProductsSkeleton } from "@/components"
import { useGetHome6BestSellerProducts } from "@/service"

const BestSellerProductsSection: React.FC = () => {
    
    const { data: products, isLoading } = useGetHome6BestSellerProducts()

    if (isLoading) {
        return <BestSellerProductsSkeleton />
    }

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            <div className="flex items-center justify-between gap-3" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    Best Seller Products
                </h2>
                <Link href="/products" className="font-semibold text-sm text-brand underline hover:text-brand/80 transition-colors">
                    See all
                </Link>
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

export { BestSellerProductsSection }
