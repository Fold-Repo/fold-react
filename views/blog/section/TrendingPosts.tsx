"use client"

import { TrendingPostCard } from "@/components/cards"
import { TrendingListSkeleton } from "@/components/skeleton"
import { useGetPosts } from "@/service";
import { PostType } from "@/types";
import React from "react"

const TrendingPosts = () => {

    const { data: POSTS, isLoading } = useGetPosts({ trending: true });

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-5">

            <h2 className="text-left text-base font-semibold">Trending Now</h2>

            <div className="divide-y divide-gray-300 dark:divide-gray-600">
                {isLoading ? (
                    <TrendingListSkeleton />
                ) : (
                    POSTS?.map((post: PostType) => (
                        <TrendingPostCard key={post.id} post={post} />
                    ))
                )}
            </div>

        </div>
    )
}

export default TrendingPosts
