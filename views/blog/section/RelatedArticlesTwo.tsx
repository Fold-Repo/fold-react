"use client";

import React from "react";
import { useGetRelatedPosts } from "@/service";
import { RelatedArticleTwo } from "@/components/cards";
import { RelatedArticleTwoListSkeleton } from "@/components/skeleton";
import { PostType } from "@/types";

interface RelatedArticlesTwoProps {
    postId: number;
}

const RelatedArticlesTwo: React.FC<RelatedArticlesTwoProps> = ({ postId }) => {
    const { response: relatedPosts, isLoading } = useGetRelatedPosts(postId);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-4 sticky top-4">
            <h2 className="text-left text-base font-semibold border-b border-gray-300 pb-2">Related Articles</h2>
            
            <div className="w-full space-y-1">
                {isLoading ? (
                    <RelatedArticleTwoListSkeleton count={6} />
                ) : (
                    relatedPosts?.map((post: PostType, index: number) => (
                        <RelatedArticleTwo key={index} post={post} />
                    ))
                )}
            </div>
        </div>
    );
};

export default RelatedArticlesTwo;
