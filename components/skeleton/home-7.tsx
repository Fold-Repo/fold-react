"use client"

import React from "react"
import { SkeletonBox } from "./base"
import { ProductCardSevenSkeleton, ProductCardEightSkeleton } from "./product"

// Top Sellers Skeleton
export const TopSellersSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-center flex-col max-w-lg mx-auto text-center">
                <SkeletonBox height="24px" width="192px" />
                <SkeletonBox height="16px" width="256px" className="mt-2" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardEightSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// New Arrivals Skeleton
export const NewArrivalsSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-center flex-col max-w-lg mx-auto text-center">
                <SkeletonBox height="24px" width="192px" />
                <SkeletonBox height="16px" width="256px" className="mt-2" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardSevenSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// Winter Collection Skeleton
export const WinterCollectionSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-center flex-col max-w-lg mx-auto text-center">
                <SkeletonBox height="24px" width="192px" />
                <SkeletonBox height="16px" width="256px" className="mt-2" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardEightSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}
