"use client";

import React from "react";
import { PostCardTwo } from "@/components/cards";
import { PostCardTwoSkeleton } from "@/components/skeleton";
import { useGetOtherPosts } from "@/service";
import { PostType } from "@/types";
import { SwiperCarousel, SwiperSlide } from "@/components/carousel";

const OtherNews = ({ title, description }: { title: string, description?: string }) => {
    
    const { response: otherPosts, isLoading } = useGetOtherPosts();

    return (
        <div className="space-y-6">

            <div className="space-y-2">
                <h2 className="text-left text-base md:text-lg font-semibold"> {title} </h2>
                {description && (
                    <p className="text-sm leading-6">
                        {description}
                    </p>
                )}
            </div>

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
                paginationClass='pagination'
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
                    otherPosts?.map((post: PostType) => (
                        <SwiperSlide key={post.id}>
                            <PostCardTwo post={post} />
                        </SwiperSlide>
                    ))
                )}

            </SwiperCarousel>

        </div>
    )
}

export default OtherNews