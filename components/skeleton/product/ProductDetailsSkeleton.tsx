"use client";

import React from "react";
import { SkeletonBox, SkeletonCircle, SkeletonButton, SkeletonCard } from "../base";
import { ProductReviewsSkeleton } from "./ProductReviewsSkeleton";

interface ProductDetailsSkeletonProps {
    showReviews?: boolean;
}

export const ProductDetailsSkeleton: React.FC<ProductDetailsSkeletonProps> = ({ showReviews = true }) => {
    return (
        <>

            {/* ====== BREADCRUMB SKELETON ====== */}
            <div className="bg-gray-200/80 dark:bg-gray-800 py-8 md:py-12">
                <div className="container flex items-center gap-2">
                    <SkeletonBox height="16px" width="48px" />
                    <SkeletonBox height="16px" width="16px" />
                    <SkeletonBox height="16px" width="64px" />
                    <SkeletonBox height="16px" width="16px" />
                    <SkeletonBox height="16px" width="80px" />
                    <SkeletonBox height="16px" width="16px" />
                    <SkeletonBox height="16px" width="120px" />
                </div>
            </div>

            <div className="container section-lg space-y-12">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* ====== PRODUCT IMAGE GALLERY SKELETON ====== */}

                    <div className="flex flex-col lg:sticky top-5 h-fit space-y-2 self-start">

                        {/* ====== MAIN IMAGE ====== */}
                        <SkeletonBox className="w-full aspect-square rounded-xl" />

                        {/* ====== THUMBNAILS ====== */}
                        <div className="flex gap-3 overflow-x-auto p-2">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <SkeletonBox key={idx} className="w-16 h-16 lg:w-18 lg:h-18 rounded-lg flex-shrink-0" />
                            ))}
                        </div>

                    </div>

                    {/* ====== PRODUCT DETAILS SKELETON ====== */}
                    <div className="py-2 space-y-6 overflow-hidden">

                        {/* ====== TITLE ====== */}
                        <SkeletonBox height="24px" width="80%" />

                        {/* ====== DESCRIPTION ====== */}
                        <div className="space-y-2">
                            <SkeletonBox height="16px" width="100%" />
                            <SkeletonBox height="16px" width="95%" />
                            <SkeletonBox height="16px" width="85%" />
                        </div>

                        {/* ====== RATING ====== */}
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <SkeletonCircle key={idx} width="20px" height="20px" />
                                ))}
                            </div>
                            <SkeletonBox height="16px" width="100px" />
                        </div>

                        {/* ====== PRICING ====== */}
                        <div className="flex items-end gap-4">
                            <SkeletonBox height="24px" width="80px" />
                            <SkeletonBox height="16px" width="60px" />
                            <SkeletonBox height="14px" width="120px" />
                        </div>

                        {/* ====== COLOR SWATCH ====== */}
                        <div className="space-y-2">
                            <SkeletonBox height="16px" width="48px" />
                            <div className="flex gap-2">
                                {Array.from({ length: 3 }).map((_, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <SkeletonCircle width="20px" height="20px" />
                                        <SkeletonBox height="14px" width="40px" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ====== QUANTITY AND STOCK ====== */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden p-1">
                                <SkeletonBox height="32px" width="32px" />
                                <SkeletonBox height="32px" width="48px" />
                                <SkeletonBox height="32px" width="32px" />
                            </div>
                            <div className="flex items-center gap-2">
                                <SkeletonCircle width="16px" height="16px" />
                                <SkeletonBox height="16px" width="60px" />
                            </div>
                        </div>

                        {/* ====== ACTION BUTTONS ====== */}
                        <div className="flex items-center gap-3">
                            <SkeletonButton size="lg" variant="full" />
                            <SkeletonButton size="lg" variant="full" />
                        </div>

                        {/* ====== DELIVERY INFO ====== */}
                        <div className="flex flex-col gap-y-3">
                            <div className="inline-flex items-center gap-3">
                                <SkeletonCircle width="20px" height="20px" />
                                <SkeletonBox height="16px" width="150px" />
                            </div>
                            <div className="inline-flex items-center gap-3">
                                <SkeletonCircle width="20px" height="20px" />
                                <SkeletonBox height="16px" width="120px" />
                            </div>
                        </div>

                        {/* ====== REVIEWS SECTION ====== */}
                        {showReviews && <ProductReviewsSkeleton />}

                    </div>
                </div>

                {/* ====== SPECIFICATIONS SKELETON ====== */}
                <div className="space-y-6">

                    <SkeletonBox height="24px" width="200px" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <SkeletonCard key={idx}>
                                <div className="space-y-5">
                                    <SkeletonBox height="16px" width="120px" className="mx-auto" />
                                    <div className="space-y-4">
                                        {Array.from({ length: 4 }).map((_, itemIdx) => (
                                            <div key={itemIdx} className="flex items-center gap-2">
                                                <SkeletonCircle width="20px" height="20px" />
                                                <SkeletonBox height="14px" width="100%" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SkeletonCard>
                        ))}
                    </div>

                </div>

            </div>

        </>
    );
};

export default ProductDetailsSkeleton;
