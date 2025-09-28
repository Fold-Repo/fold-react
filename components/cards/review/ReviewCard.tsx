"use client";

import React from "react";
import moment from "moment";
import { RatingStars } from "@/components";
import { Review } from "@/types";
import { Image } from "@heroui/react";

export interface ReviewCardProps {
    review: Review;
    className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({  review }) => {
    return (
        <div className="border border-brand rounded-lg p-4 space-y-5 h-full">

            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-5">
                {review.content}
            </p>

            <div className="flex items-center gap-3 justify-between">

                <div className="flex items-center gap-3">
                    {review.author.image && (
                        <Image width={32} src={review.author.image} 
                            alt={review.author.name} className="w-8 h-8 rounded-full object-cover"
                        />
                    )}
                    <div className="space-y-0.5 text-gray-600 dark:text-gray-300">
                        <h2 className="text-sm font-semibold">{review.author.name}</h2>
                        <p className="text-xs">{review.author.role}</p>
                    </div>
                </div>
                
                {/* Rating and Date */}
                <div className="flex flex-col items-end space-y-1">
                    {review.rating && (
                        <RatingStars 
                            rating={review.rating} 
                            size="sm" 
                            variant="display"
                        />
                    )}
                    
                    {review.date && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {moment(review.date).fromNow()}
                        </p>
                    )}

                </div>
            </div>

        </div>
    );
};

export default ReviewCard;
