"use client";

import React, { useState } from "react";
import { RatingBreakdown, ReviewCardTwo, Dropdown } from "@/components";
import { Review } from "@/types";
import { useGetProductReviews } from "@/service";
import { CustomerReviewsSkeleton } from "@/components/skeleton";

interface CustomerReviewsProps {
    productId: string;
    productRating?: number;
    className?: string;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
    productId,
    productRating = 0,
    className
}) => {

    const { response: reviews, isLoading } = useGetProductReviews(productId);

    const [sortBy, setSortBy] = useState("most_recent");

    const calculateBreakdown = (reviews: Review[]) => {
        const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews?.forEach(review => {
            if (review.rating) {
                breakdown[review.rating as keyof typeof breakdown]++;
            }
        });
        return breakdown;
    };


    const sortOptions = [
        { label: "Most Recent", value: "most_recent" },
        { label: "Highest Rated", value: "highest_rated" },
        { label: "Lowest Rated", value: "lowest_rated" }
    ];

    const sortedReviews = React.useMemo(() => {
        if (!reviews) return [];

        switch (sortBy) {
            case "highest_rated":
                return [...reviews].sort((a, b) => (b.rating || 0) - (a.rating || 0));
            case "lowest_rated":
                return [...reviews].sort((a, b) => (a.rating || 0) - (b.rating || 0));
            case "most_recent":
            default:
                return [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
    }, [reviews, sortBy]);

    if (isLoading) {
        return <CustomerReviewsSkeleton />;
    }

    return (
        <div className={`space-y-5 ${className}`}>

            <div className="flex items-center gap-3 justify-between mb-5">

                <h2 className="font-semibold text-base md:text-lg">Customer Reviews</h2>

                <Dropdown
                    options={sortOptions}
                    value={sortBy}
                    onChange={(value) => setSortBy(value)}
                    placeholder="Sort By"
                    label="Sort By:"
                    className="min-w-[120px]"
                />

            </div>

            {/* Rating Breakdown */}
            {reviews && reviews.length > 0 && (
            <RatingBreakdown
                    rating={productRating}
                    totalReviews={reviews.length}
                    breakdown={calculateBreakdown(reviews)}
                />
            )}

            <div className="space-y-5">

                <h1 className="font-bold text-sm lg:text-base">Customer Comments</h1>

                <div className="max-w-6xl space-y-4">
                    {sortedReviews.map((review, index) => (
                        <ReviewCardTwo
                            key={review.id || index}
                            review={review}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default CustomerReviews;
