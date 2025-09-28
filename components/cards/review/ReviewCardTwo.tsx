"use client";

import React from "react";
import { RatingStars } from "@/components";
import { Review } from "@/types";
import moment from "moment";
import { cn } from "@/lib";
import { Avatar } from "@heroui/react";

interface ReviewCardTwoProps {
    review: Review;
    className?: string;
}

const ReviewCardTwo: React.FC<ReviewCardTwoProps> = ({
    review,
    className
}) => {
    return (
        <div className={cn("flex items-start gap-3 py-3", className)}>

            <div className="flex-shrink-0">
                <Avatar src={review.author.image} name={review.author.name}
                size="sm"  className="size-8 md:size-10" />
            </div>

            <div className="w-full">
                
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-sm md:text-base font-bold text-gray-900 dark:text-gray-300">
                        {review.author.name}
                    </h1>
                    <span className="text-[13px] text-gray-600 dark:text-gray-400">
                        {moment(review.date).fromNow()}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-yellow-400 text-xs pt-1 mb-2">
                    <RatingStars rating={review.rating || 0} size="sm" />
                </div>

                <p className="text-[13px] md:text-sm pt-1 leading-6 text-gray-700 dark:text-gray-400">
                    {review.content}
                </p>

            </div>

        </div>
    );
};

export default ReviewCardTwo;
