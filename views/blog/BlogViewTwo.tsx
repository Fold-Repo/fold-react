"use client"

import { PostCardThree, TopPostCard } from "@/components/cards"
import { PostCardThreeListSkeleton, TopPostSkeleton } from "@/components/skeleton"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import React from "react"
import { BlogLayout, BlogRightContents } from "./components"
import { Pagination } from "@/components"
import { usePostsQuery } from "@/service"
import { PostType } from "@/types"
import { OtherNews } from "./section"

const BlogViewTwo = () => {

    const { posts, currentPage, totalItems, limit, isLoading } = usePostsQuery();

    return (
        <>

            <Header />

            <div className="mb-12 pt-2 container space-y-12">

                {isLoading ? (
                    <TopPostSkeleton variant='stacked' />
                ) : (
                    <TopPostCard variant='stacked' post={posts[0]} />
                )}

                <BlogLayout
                    left={
                        <>

                            <h2 className="text-left text-base md:text-lg font-semibold">Latest Stories</h2>

                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                                {isLoading ? (
                                    <PostCardThreeListSkeleton count={9} />
                                ) : (
                                    posts?.slice(1).map((post: PostType) => (
                                        <PostCardThree key={post.id} post={post} />
                                    ))
                                )}
                            </div>

                            <Pagination initialPage={Number(currentPage)} total={Number(totalItems)} perPage={Number(limit)} />

                        </>
                    }
                    right={<BlogRightContents />}
                />

                <OtherNews title='Other News' description='Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here. You have the option to now select and buy.Details about the product in question goes here. You have the option to now select and buy.'/>

            </div>

            <Footer />

        </>
    )
}

export default BlogViewTwo