"use client"

import React from "react"
import { ProductCardEight, WinterCollectionSkeleton } from "@/components"
import { useGetHome7WinterCollection } from "@/service"

const NewWinterCollectionSection: React.FC = () => {
    
    const { data: products, isLoading } = useGetHome7WinterCollection()

    if (isLoading) {
        return <WinterCollectionSkeleton />
    }

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-lg mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    New Winter Collection
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout.
                </p>
            </div>
            
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

export { NewWinterCollectionSection }
