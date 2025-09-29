"use client";

import React from "react";
import { SkeletonBox, SkeletonCircle } from "../base";

export const ProductSkeleton: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 
            dark:border-gray-700 overflow-hidden p-1.5 md:p-3">
            
            {/* ================= PRODUCT IMAGE ================= */}
            <SkeletonBox className="w-full aspect-[9/7] rounded-lg" />

            {/* ================= PRODUCT INFO ================= */}
            <div className="space-y-2 pt-3">
                {/* ================= CATEGORY AND RATING ================= */}
                <div className="flex justify-between gap-2 flex-wrap items-center">
                    <SkeletonBox height="12px" width="64px" />
                    <div className="flex items-center gap-1">
                        <SkeletonCircle width="16px" height="16px" />
                        <SkeletonBox height="12px" width="32px" />
                    </div>
                </div>

                {/* ================= PRODUCT NAME ================= */}
                <SkeletonBox height="16px" width="100%" />

                {/* ================= PRICE ================= */}
                <SkeletonBox height="16px" width="64px" />

                {/* ================= ADD TO CART BUTTON ================= */}
                <SkeletonBox height="32px" width="100%" />
            </div>

        </div>
    );
};

export const ProductCardSkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <ProductSkeleton key={idx} />
            ))}
        </>
    );
};

// ================= PRODUCT CARD TWO SKELETON =================
export const ProductCardTwoSkeleton: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex flex-col sm:flex-row gap-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3 ${className || ""}`}>
            
            {/* ================= PRODUCT IMAGE SKELETON ================= */}
            <SkeletonBox className="sm:w-64 aspect-9/7 rounded-lg shadow" />

            {/* ================= PRODUCT INFO SKELETON ================= */}
            <div className="flex flex-col gap-2 flex-1">
                
                {/* ================= PRODUCT NAME SKELETON ================= */}
                <SkeletonBox height="20px" width="100%" />

                {/* ================= PRODUCT DESCRIPTION SKELETON ================= */}
                <SkeletonBox height="16px" width="75%" />

                {/* ================= PRICE SKELETON ================= */}
                <SkeletonBox height="20px" width="33%" />

                {/* ================= COLOR SWATCH SKELETON ================= */}
                <div className="flex items-center gap-2">
                    <SkeletonBox height="16px" width="48px" />
                    <div className="flex gap-2">
                        <SkeletonCircle width="16px" height="16px" />
                        <SkeletonCircle width="16px" height="16px" />
                    </div>
                </div>

                {/* ================= STOCK STATUS SKELETON ================= */}
                <SkeletonBox height="16px" width="64px" />

                {/* ================= RATING SKELETON ================= */}
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <SkeletonCircle key={idx} width="16px" height="16px" />
                        ))}
                    </div>
                    <SkeletonBox height="16px" width="80px" />
                </div>

                {/* ================= ADD TO CART BUTTON SKELETON ================= */}
                <SkeletonBox height="32px" width="100%" className="max-w-full sm:max-w-xs mt-2" />

            </div>
            
        </div>
    );
};

export const ProductFilterSkeleton: React.FC = () => {
    return (
        <div className="space-y-8">

            {/* ================= FILTER TITLE ================= */}
            <SkeletonBox height="24px" width="96px" className="border-b border-gray-300 pb-3" />

            {/* ================= FILTER CONTAINER ================= */}
            <div className="bg-white dark:bg-gray-800 rounded-xl px-5 py-2 sticky top-3">
                <div className="divide-y divide-gray-300 dark:divide-gray-600">

                    {/* ================= CATEGORY FILTER ================= */}
                    <div className="py-3">
                        <div className="flex items-center justify-between mb-4">
                            <SkeletonBox height="16px" width="64px" />
                            <SkeletonBox height="16px" width="16px" />
                        </div>
                        <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-3">
                                    <div className="flex gap-2 items-center">
                                        <SkeletonBox height="16px" width="16px" className="rounded-sm" />
                                        <SkeletonBox height="12px" width="96px" />
                                    </div>
                                    <SkeletonBox height="12px" width="32px" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= RATING FILTER ================= */}
                    <div className="py-3">
                        <div className="flex items-center justify-between mb-4">
                            <SkeletonBox height="16px" width="48px" />
                            <SkeletonBox height="16px" width="16px" />
                        </div>
                        <div className="space-y-3">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <SkeletonCircle width="16px" height="16px" />
                                    <div className="flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map((_, starIdx) => (
                                            <SkeletonBox key={starIdx} height="16px" width="16px" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= PRICE FILTER ================= */}
                    <div className="py-3">
                        <div className="flex items-center justify-between mb-4">
                            <SkeletonBox height="16px" width="80px" />
                            <SkeletonBox height="16px" width="16px" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-1">
                                <SkeletonBox height="12px" width="32px" className="mb-1" />
                                <SkeletonBox height="40px" width="100%" />
                            </div>
                            <SkeletonBox height="16px" width="8px" />
                            <div className="flex-1">
                                <SkeletonBox height="12px" width="32px" className="mb-1" />
                                <SkeletonBox height="40px" width="100%" />
                            </div>
                        </div>
                    </div>

                    {/* ================= BRAND FILTER ================= */}
                    <div className="py-3">
                        <div className="flex items-center justify-between mb-4">
                            <SkeletonBox height="16px" width="48px" />
                            <SkeletonBox height="16px" width="16px" />
                        </div>
                        <div className="space-y-3">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-3">
                                    <div className="flex gap-2 items-center">
                                        <SkeletonBox height="16px" width="16px" className="rounded-sm" />
                                        <SkeletonBox height="12px" width="64px" />
                                    </div>
                                    <SkeletonBox height="12px" width="32px" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
