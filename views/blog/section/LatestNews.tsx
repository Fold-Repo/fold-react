"use client";

import React from "react";
import { PostCardTwo } from "@/components/cards";
import { PostCardTwoSkeleton } from "@/components/skeleton";
import { useGetLatestPosts } from "@/service";
import { PostType } from "@/types";
import { SwiperCarousel, SwiperSlide } from "@/components/carousel";

const LatestNews = () => {
    const { response: latestPosts, isLoading } = useGetLatestPosts();

    return (
        <div className="space-y-7">
            
            <h2 className="text-center text-base md:text-lg font-semibold">Latest News</h2>

            <SwiperCarousel
                mobile={1}
                md={2}
                lg={3}
                xl={4}
                space={10}
                spaceMd={10}
                spaceLg={10}
                loop={false}
                autoplay={true}
                autoplayDelay={4000}>
                {isLoading ? (
                    <>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <PostCardTwoSkeleton />
                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    latestPosts?.map((post: PostType) => (
                        <SwiperSlide key={post.id}>
                            <PostCardTwo post={post} variant="reversed" />
                        </SwiperSlide>
                    ))
                )}
            </SwiperCarousel>
        </div>
    );
};

export default LatestNews;
