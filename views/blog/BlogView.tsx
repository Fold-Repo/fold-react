"use client"

import { PostCard, TopPostCard } from "@/components/cards"
import { PostListSkeleton, TopPostSkeleton } from "@/components/skeleton"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import React from "react"
import { BlogLayout, BlogRightContents } from "./components"
import { Pagination } from "@/components"
import { usePostsQuery } from "@/service"
import { PostType } from "@/types"
import { OtherNews } from "./section"

const BlogView = () => {

    const { posts, currentPage, totalItems, limit, isLoading } = usePostsQuery();

    return (
        <>

            <Header />

            <div className="section-lg container space-y-12">

                {isLoading ? (
                    <TopPostSkeleton variant='compact' />
                ) : (
                    <TopPostCard variant='compact' post={posts[0]} />
                )}

                <BlogLayout
                    left={
                        <>

                            <h2 className="text-left text-base md:text-lg font-semibold">The Latest</h2>

                            <div className="divide-y divide-gray-300 dark:divide-gray-600 space-y-1">
                                {isLoading ? (
                                    <PostListSkeleton count={5} />
                                ) : (
                                    posts?.slice(1).map((post: PostType, index: number) => (
                                        <PostCard key={index} post={post} />
                                    ))
                                )}
                            </div>

                            <Pagination initialPage={Number(currentPage)} total={Number(totalItems)} perPage={Number(limit)} />

                        </>
                    }
                    right={<BlogRightContents />}
                />

                <OtherNews title='Other News' />

            </div>

            <Footer />

        </>
    )
}

export default BlogView