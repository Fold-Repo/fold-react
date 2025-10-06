"use client"

import React from "react"
import { SkeletonBox } from "./base"
import { ProductCardSevenSkeleton, ProductCardEightSkeleton } from "./product"

export const NewCollectionSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">
            <SkeletonBox height="24px" width="192px" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardEightSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// Best Seller Products Skeleton
export const BestSellerProductsSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between gap-3">
                <SkeletonBox height="24px" width="192px" />
                <SkeletonBox height="16px" width="64px" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardSevenSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// Our Products Skeleton
export const OurProductsSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-5">
                <SkeletonBox height="24px" width="192px" />
                
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardSevenSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}
