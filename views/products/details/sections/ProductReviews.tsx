"use client";

import React from "react";
import { SwiperCarousel, SwiperSlide } from "@/components/carousel";
import { ReviewCard, Button, ProductReviewsSkeleton } from "@/components";
import { useGetProductReviews } from "@/service";
import { Review } from "@/types";

interface ProductReviewsProps {
    productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
    
    const { response: reviews, isLoading } = useGetProductReviews(productId);

    if (isLoading) {
        return <ProductReviewsSkeleton />;
    }

    if (reviews.length < 1 && !isLoading) {
        return null
    }

return (
        <div className="flex flex-col gap-y-5 pt-3">

            <div className="flex items-center gap-3 justify-between">
                <h2 className="text-sm font-medium">Reviews ({reviews.length})</h2>
                <Button className='h-8' variant="outline-brand" size="sm">View All</Button>
            </div>

            <div dir="ltr">
                <SwiperCarousel
                    className="product-reviews-swiper"
                    mobile={1}
                    md={1}
                    lg={1}
                    space={10}
                    spaceMd={10}
                    spaceLg={10}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={4000}
                    paginationClass=".sw-pagination-reviews">
                    {reviews.map((review: Review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>

                <div className="sw-pagination-reviews mt-5 flex gap-2 justify-center"></div>

            </div>

        </div>
    );
};

export default ProductReviews