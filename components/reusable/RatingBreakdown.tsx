"use client";

import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import RatingStars from "./RatingStars";
import { cn } from "@/lib";

interface RatingBreakdownProps {
    rating: number;
    totalReviews: number;
    breakdown?: {
        5: number;
        4: number;
        3: number;
        2: number;
        1: number;
    };
    className?: string;
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
    rating,
    totalReviews,
    breakdown = { 5: 80, 4: 30, 3: 0, 2: 0, 1: 0 },
    className
}) => {
    const getPercentage = (count: number) => {
        const total = Object.values(breakdown).reduce((sum, val) => sum + val, 0);
        return total > 0 ? (count / total) * 100 : 0;
    };


    return (
        <div className={cn("flex md:items-center gap-5 flex-col md:flex-row justify-between text-gray-800 mb-5", className)}>

            <div className="flex flex-col font-inter space-y-1">

                <span className="text-5xl font-semibold text-gray-900 dark:text-gray-300">
                    {rating.toFixed(1)}
                </span>

                <RatingStars rating={rating} size="md" />

                <span className="text-sm text-gray-500">
                    {totalReviews} reviews
                </span>

            </div>

            {/* Rating Breakdown */}
            <div className="space-y-2 w-full max-w-3xl">
                {[5, 4, 3, 2, 1].map((starCount) => {
                    const count = breakdown[starCount as keyof typeof breakdown];
                    const percentage = getPercentage(count);
                    
                    return (
                        <div key={starCount} className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-500 dark:text-gray-300 text-base min-w-[20px]">
                                {starCount}
                            </span>
                            <StarIcon className="w-4 h-4 text-yellow-500" />
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-2 rounded overflow-hidden max-w-3xl w-full">
                                <div className="bg-yellow-500 h-full transition-all duration-300"
                                    style={{ width: `${percentage}%` }}   />
                            </div>
                            <span className="text-xs text-gray-500 min-w-[30px]">
                                {count}
                            </span>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
};

export default RatingBreakdown;
