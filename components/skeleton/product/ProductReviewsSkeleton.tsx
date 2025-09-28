"use client";

import React from "react";
import { SkeletonBox, SkeletonCircle, SkeletonText, SkeletonButton, SkeletonCard } from "../base";

export const ProductReviewsSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-5 pt-3">

            <div className="flex items-center gap-3 justify-between">
                <SkeletonBox height="16px" width="100px" />
                <SkeletonButton size="sm" variant="outline" />
            </div>

            <SkeletonCard>
                <div className="space-y-4">
                    <SkeletonText lines={3} />
                    <div className="flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3">
                            <SkeletonCircle width="32px" height="32px" />
                            <div className="space-y-1">
                                <SkeletonBox height="14px" width="100px" />
                                <SkeletonBox height="12px" width="80px" />
                            </div>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <SkeletonCircle key={idx} width="12px" height="12px" />
                                ))}
                            </div>
                            <SkeletonBox height="12px" width="60px" />
                        </div>
                    </div>
                </div>
            </SkeletonCard>

        </div>
    );
};

export const CustomerReviewsSkeleton: React.FC = () => {
    return (
        <div className="space-y-5">

            {/* ================= HEADER ================= */}
            <div className="flex items-center gap-3 justify-between mb-5">
                <SkeletonBox height="20px" width="150px" />
                <div className="flex items-center gap-2">
                    <SkeletonBox height="14px" width="60px" />
                    <SkeletonButton size="sm" variant="outline" />
                </div>
            </div>

            {/* ================= RATING BREAKDOWN ================= */}
            <div className="flex md:items-center gap-5 flex-col md:flex-row justify-between text-gray-800 mb-5">
                {/* Overall Rating */}
                <div className="flex flex-col font-inter space-y-1">
                    <SkeletonBox height="48px" width="60px" />
                    <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <SkeletonCircle key={idx} width="16px" height="16px" />
                        ))}
                    </div>
                    <SkeletonBox height="14px" width="80px" />
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-2 w-full max-w-3xl">
                    {[5, 4, 3, 2, 1].map((starCount) => (
                        <div key={starCount} className="flex items-center space-x-2">
                            <SkeletonBox height="16px" width="20px" />
                            <SkeletonCircle width="16px" height="16px" />
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-2 rounded overflow-hidden">
                                <SkeletonBox height="8px" width="60%" />
                            </div>
                            <SkeletonBox height="12px" width="30px" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= COMMENTS SECTION ================= */}
            <div className="space-y-5">
                <SkeletonBox height="16px" width="120px" />

                <div className="max-w-6xl space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex items-start gap-3 py-3">
                            {/* Avatar */}
                            <SkeletonCircle width="40px" height="40px" />

                            {/* Review Content */}
                            <div className="w-full space-y-2">
                                {/* Name and Date */}
                                <div className="flex items-center gap-2">
                                    <SkeletonBox height="16px" width="120px" />
                                    <SkeletonBox height="12px" width="80px" />
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <SkeletonCircle key={idx} width="12px" height="12px" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <SkeletonText lines={2} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductReviewsSkeleton;
