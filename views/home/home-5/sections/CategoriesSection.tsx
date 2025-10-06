"use client"

import React from "react"
import { CategoryCard, CategoriesSectionSkeleton } from "@/components"
import { useGetHome5Categories } from "@/service"

const CategoriesSection: React.FC = () => {
    
    const { data: categories, isLoading } = useGetHome5Categories()

    if (isLoading) {
        return <CategoriesSectionSkeleton />
    }

    return (
        <div className="space-y-12" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-lg mx-auto text-center space-y-3" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    Categories
                </h2>
                <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                </p>
            </div>
            
            <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    
                    {categories?.map((category, index) => (
                        <CategoryCard 
                            key={category.id} 
                            category={category}
                            className="data-aos-fade-up"
                        />
                    ))}
                    
                </div>
                
            </div>
            
        </div>
    )
}

export { CategoriesSection }
