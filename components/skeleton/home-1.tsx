"use client";

import React from "react";
import { SkeletonBox } from "./base";
import { ProductCardThreeSkeleton, ProductCardFourSkeleton } from "./product/ProductSkeleton";

// ================= COLLECTION CARD SKELETON =================
export const CollectionCardSkeleton: React.FC<{ size?: "small" | "medium" | "large" }> = ({ size = "medium" }) => {
    const sizeClasses = {
        small: "aspect-[9/6]",
        medium: "aspect-[9/6]",
        large: "h-56 md:h-auto"
    };

    // const textSizeClasses = {
    //     small: "text-sm",
    //     medium: "text-base", 
    //     large: "text-xl"
    // };

    const paddingClasses = {
        small: "bottom-2 left-2 right-2",
        medium: "bottom-3 left-3 right-3",
        large: "bottom-5 left-5 right-5"
    };

    return (
        <div className={`relative w-full rounded-xl overflow-hidden ${sizeClasses[size]}`}>
            
            {/* ================= BACKGROUND IMAGE ================= */}
            <SkeletonBox className="absolute inset-0 w-full h-full" />

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/30" />

            {/* ================= CONTENT ================= */}
            <div className={`absolute space-y-3 z-10 ${paddingClasses[size]}`}>

                {/* ================= TITLE ================= */}
                <SkeletonBox 
                    height={size === "large" ? "24px" : "16px"} 
                    width={size === "large" ? "200px" : "120px"} 
                    className="bg-white/20"
                />

                {/* ================= DESCRIPTION ================= */}
                <div className="bg-black/30 backdrop-blur-md rounded-tl-md rounded-br-md p-3">
                    <div className="space-y-2">
                        <SkeletonBox height="12px" width="100%" className="bg-white/20" />
                        <SkeletonBox height="12px" width="80%" className="bg-white/20" />
                        {size === "large" && (
                            <SkeletonBox height="12px" width="60%" className="bg-white/20" />
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
};

// ================= TRENDING CARD SKELETON =================
export const TrendingCardSkeleton: React.FC<{ variant?: "small" | "large-left" | "large-right" }> = ({ variant = "small" }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "small":
                return "aspect-7/8";
            case "large-left":
                return "w-full h-full aspect-7/7 md:aspect-auto";
            case "large-right":
                return "aspect-9/5 md:aspect-9/3 flex-1";
            default:
                return "aspect-7/8";
        }
    };

    return (
        <div className={`relative rounded-tl-xl rounded-br-xl overflow-hidden ${getVariantClasses()}`}>
            
            {/* ================= BACKGROUND IMAGE ================= */}
            <SkeletonBox className="absolute inset-0 w-full h-full" />

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/30" />

            {/* ================= NEW BADGE ================= */}
            <div className="absolute top-3 right-3">
                <SkeletonBox height="20px" width="40px" className="rounded-full bg-white/20" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-3 px-4">

                {/* ================= TITLE ================= */}
                <SkeletonBox height="20px" width="150px" className="bg-white/20" />

                {/* ================= DESCRIPTION ================= */}
                <div className="w-full bg-black/40 backdrop-blur-md rounded-tl-md rounded-br-md px-4 py-2">
                    <div className="space-y-1">
                        <SkeletonBox height="12px" width="100%" className="bg-white/20" />
                        <SkeletonBox height="12px" width="80%" className="bg-white/20" />
                    </div>
                </div>

            </div>

        </div>
    );
};

// ================= COLLECTIONS SECTION SKELETON =================
export const CollectionsSkeleton: React.FC = () => {
    return (
        <div className="space-y-4">
            
            {/* ================= MAIN COLLECTION GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                {/* ================= LEFT SECTION ================= */}
                <div className="bg-black dark:bg-gray-800 rounded-xl p-8 md:col-span-7">
                    <div className="space-y-4">
                        <SkeletonBox height="32px" width="100%" className="bg-white/20" />
                        <SkeletonBox height="32px" width="80%" className="bg-white/20" />
                        <div className="pt-6">
                            <SkeletonBox height="40px" width="160px" className="bg-white/20" />
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT LARGE COLLECTION ================= */}
                <div className="md:col-span-5">
                    <CollectionCardSkeleton size="large" />
                </div>

            </div>

            {/* ================= SMALL COLLECTIONS GRID ================= */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <CollectionCardSkeleton key={index} size="small" />
                ))}
            </div>

            {/* ================= PRODUCTS GRID ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardThreeSkeleton key={index} />
                ))}
            </div>

        </div>
    );
};

// ================= TRENDING PRODUCTS SECTION SKELETON =================
export const TrendingProductsSkeleton: React.FC = () => {
    return (
        <div className="space-y-5">
            
            {/* ================= SECTION TITLE ================= */}
            <div className="flex flex-col gap-1">
                <SkeletonBox height="24px" width="200px" />
                <SkeletonBox height="4px" width="80px" className="rounded" />
            </div>

            {/* ================= SMALL CARDS GRID ================= */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <TrendingCardSkeleton key={index} variant="small" />
                ))}
            </div>

            {/* ================= LARGE CARDS GRID ================= */}
            <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT LARGE CARD ================= */}
                <div className="col-span-12 md:col-span-4">
                    <TrendingCardSkeleton variant="large-left" />
                </div>

                {/* ================= RIGHT SIDE CARDS ================= */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-y-4 h-full">
                    <TrendingCardSkeleton variant="large-right" />
                    <TrendingCardSkeleton variant="large-right" />
                </div>

            </div>

        </div>
    );
};

// ================= POPULAR PRODUCTS SECTION SKELETON =================
export const PopularProductsSkeleton: React.FC = () => {
    return (
        <div className="space-y-5">
            
            {/* ================= SECTION TITLE ================= */}
            <div className="flex flex-col gap-1">
                <SkeletonBox height="24px" width="200px" />
                <SkeletonBox height="4px" width="80px" className="rounded" />
            </div>

            {/* ================= PRODUCTS GRID ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardFourSkeleton key={index} />
                ))}
            </div>

        </div>
    );
};

// ================= GET DISCOUNT SECTION SKELETON =================
export const GetDiscountSkeleton: React.FC = () => {
    return (
        <div className="bg-black dark:bg-gray-800 py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">

                {/* ================= LEFT IMAGE ================= */}
                <div className="flex-1 flex justify-center">
                    <SkeletonBox 
                        height="300px" 
                        width="200px" 
                        className="w-2/3 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] rounded-lg"
                    />
                </div>

                {/* ================= CENTER CONTENT ================= */}
                <div className="flex-1 flex flex-col gap-y-5 justify-center text-center text-white dark:text-gray-100 px-4">
                    
                    <SkeletonBox height="48px" width="200px" className="bg-white/20 mx-auto" />
                    
                    <SkeletonBox height="20px" width="300px" className="bg-white/20 mx-auto" />
                    
                    <SkeletonBox height="48px" width="120px" className="bg-white/20 mx-auto" />

                </div>

                {/* ================= RIGHT IMAGE ================= */}
                <div className="flex-1 flex justify-center">
                    <SkeletonBox 
                        height="300px" 
                        width="200px" 
                        className="w-2/3 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] rounded-lg"
                    />
                </div>

            </div>
        </div>
    );
};
