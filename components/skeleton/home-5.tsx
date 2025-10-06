import React from "react"
import { ProductCardEightSkeleton } from "./product"

// Category Card Skeleton
export const CategoryCardSkeleton: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm animate-pulse ${className}`}>
            <div className="aspect-9/8 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4 text-center">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto"></div>
            </div>
        </div>
    )
}


// Categories Section Skeleton
export const CategoriesSectionSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            <div className="max-w-md mx-auto text-center space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto animate-pulse"></div>
            </div>
            
            {/* Categories Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <CategoryCardSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// Flash Sales Section Skeleton
export const FlashSalesSectionSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            {/* Products Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardEightSkeleton key={index} />
                ))}
            </div>

        </div>
    )
}

// Explore Collection Section Skeleton
export const ExploreCollectionSectionSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            <div className="max-w-md mx-auto text-center space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto animate-pulse"></div>
            </div>
            
            {/* Products Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCardEightSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}
