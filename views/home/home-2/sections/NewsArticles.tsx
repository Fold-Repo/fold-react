"use client"

import React from "react"
import Link from "next/link"
import { SectionTitle, Button } from "@/components"
import { PostCardFour } from "@/components/cards"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { useGetHome2NewsArticles } from "@/service"
import { NewsArticlesSkeleton } from "@/components/skeleton"

const NewsArticles: React.FC = () => {
    const { data: articles, isLoading } = useGetHome2NewsArticles()

    if (isLoading) {
        return <NewsArticlesSkeleton />
    }

    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">

            {/* ================= SECTION TITLE ================= */}
            <SectionTitle
                title="News & Articles"
                underlineColor="bg-blue-600"
                underlineWidth="w-20"
            />

            {/* ================= ARTICLES CAROUSEL ================= */}
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
                paginationClass=".news-pagination"
                className="swiper">

                {articles?.map((article) => (
                     <SwiperSlide key={article.id}>
                         <PostCardFour post={article} />
                     </SwiperSlide>
                ))}

                {/* ================= PAGINATION ================= */}
                <div className="news-pagination sw-dots type-circle brand flex justify-center mt-6 z-10"></div>

            </SwiperCarousel>

            {/* ================= VIEW ALL BUTTON ================= */}
            <div className="flex items-center justify-center">
                <Button variant="outline-brand" size="sm" className="h-10 px-12">
                    View all posts
                </Button>
            </div>

        </div>
    )
}

export { NewsArticles }
