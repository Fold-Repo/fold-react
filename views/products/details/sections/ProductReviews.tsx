"use client";

import React from 'react';
import { SwiperCarousel, SwiperSlide } from '@/components/carousel';
import { ReviewCard, Button } from '@/components';
import { Review } from '@/types';

// Sample review data
const reviews: Review[] = [
    {
        id: "1",
        content: "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here.",
        author: {
            name: "Eugene ADAVORE",
            role: "Online Shopper",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        rating: 5,
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    },
    {
        id: "2",
        content: "Excellent product! The quality is outstanding and it exceeded my expectations. I would definitely recommend this to anyone looking for a reliable solution. The customer service was also very helpful throughout the process.",
        author: {
            name: "Sarah Johnson",
            role: "Verified Buyer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        rating: 5,
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
    },
    {
        id: "3",
        content: "Good value for money. The product works as described and arrived on time. The packaging was secure and the item was in perfect condition. Would purchase again.",
        author: {
            name: "Michael Chen",
            role: "Customer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        },
        rating: 4,
        date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // 2 weeks ago
    },
    {
        id: "4",
        content: "Amazing experience! The product quality is top-notch and the delivery was super fast. I'm very satisfied with my purchase and will definitely be a returning customer.",
        author: {
            name: "Emily Rodriguez",
            role: "Premium Member",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        rating: 5,
        date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000)
    }
];

const ProductReviews = () => {
    return (
        <div className="flex flex-col gap-y-5 pt-3">

            <div className="flex items-center gap-3 justify-between">
                <h2 className="text-sm font-medium">Reviews ({reviews.length})</h2>
                <Button className='h-9' variant="outline-brand" size="sm">View All</Button>
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
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>

                <div className="sw-pagination-reviews mt-2 flex gap-2 justify-center"></div>

            </div>

        </div>
    );
};

export default ProductReviews