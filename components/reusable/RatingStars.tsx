"use client";

import React from "react";
import { cn } from "@/lib";
import { StarIcon } from "@heroicons/react/24/solid";

interface RatingStarsProps {
    rating: number;
    maxRating?: number;
    variant?: "filter" | "display" | "single";
    showCount?: boolean;
    count?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({
    rating,
    maxRating = 5,
    variant = "display",
    showCount = false,
    count = 0,
    size = "md",
    className,
}) => {
    const sizeClasses = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5"
    };

    const textSizeClasses = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
    };

    const renderStars = () => {
        const stars = [];
        
        for (let i = 1; i <= maxRating; i++) {
            const isFilled = i <= rating;
            const starClass = cn(
                sizeClasses[size],
                isFilled ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
            );
            
            stars.push(
                <StarIcon key={i} className={starClass} />
            );
        }
        
        return stars;
    };

    if (variant === "single") {
        return (
            <div className={cn("flex items-center gap-1", className)}>
                <StarIcon className={cn("text-yellow-400 fill-current", sizeClasses[size])} />
                {showCount && (
                    <span className={cn("font-medium", textSizeClasses[size])}>
                        {count} <span className="hidden lg:inline-flex">ratings</span>
                    </span>
                )}
            </div>
        );
    }

    if (variant === "filter") {
        return (
            <div className={cn("flex items-center gap-0.5", className)}>
                {renderStars()}
            </div>
        );
    }

    // Default display variant
    return (
        <div className={cn("flex items-center gap-1", className)}>
            <div className="flex items-center gap-0.5">
                {renderStars()}
            </div>
            {showCount && (
                <span className={cn("font-medium", textSizeClasses[size])}>
                    {count} <span className="hidden lg:inline-flex">ratings</span>
                </span>
            )}
        </div>
    );
};

export default RatingStars;
