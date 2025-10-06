"use client"

import React from "react"
import { ProductCardEight, NewCollectionSkeleton } from "@/components"
import { useGetHome6NewCollectionProducts } from "@/service"

const NewCollectionSection: React.FC = () => {
    
    const { data: products, isLoading } = useGetHome6NewCollectionProducts()

    if (isLoading) {
        return <NewCollectionSkeleton />
    }

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white" data-aos="fade-up" data-aos-delay="200">
                New Collection
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2" data-aos="fade-up" data-aos-delay="300">
                
                {products?.map((product) => (
                    <ProductCardEight 
                        key={product.id} 
                        product={product}
                    />
                )) || []}
                
            </div>
            
        </div>
    )
}

export { NewCollectionSection }
