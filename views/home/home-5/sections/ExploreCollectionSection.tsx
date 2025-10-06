"use client"

import React from "react"
import { ProductCardEight, ExploreCollectionSectionSkeleton } from "@/components"
import { useGetHome5CollectionProducts } from "@/service"

const ExploreCollectionSection: React.FC = () => {
    
    const { data: collectionProducts, isLoading } = useGetHome5CollectionProducts()

    if (isLoading) {
        return <ExploreCollectionSectionSkeleton />
    }

    return (
        <div className="space-y-12" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-lg mx-auto text-center space-y-3" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    Explore Our Collection
                </h2>
                <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    Check our collection
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2" data-aos="fade-up" data-aos-delay="300">
                
                {collectionProducts?.map((product, index) => (
                    <ProductCardEight 
                        key={product.id} 
                        product={product}
                    />
                )) || []}
                
            </div>
            
        </div>
    )
}

export { ExploreCollectionSection }
