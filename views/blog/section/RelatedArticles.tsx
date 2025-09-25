"use client";

import React from "react";
import { useGetRelatedPosts } from "@/service";
import { RelatedArticleCard } from "@/components/cards";
import { RelatedArticleListSkeleton } from "@/components/skeleton";
import { PostType } from "@/types";

interface RelatedArticlesProps {
    postId: number;
    gridVariant?: "grid-1" | "grid-2";
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ postId, gridVariant = "grid-1" }) => {

    const { response: relatedPosts, isLoading } = useGetRelatedPosts(postId);

    const gridClass = gridVariant === "grid-2" ? "grid grid-cols-1 lg:grid-cols-2 gap-3" : "grid grid-cols-1 gap-3";

    return (
        <div className="space-y-8">
            
            <h2 className="text-left text-sm font-medium uppercase text-gray-500">
                Here are some related articles you may find interesting:
            </h2>

            <div className={gridClass}>
                {isLoading ? (
                    <RelatedArticleListSkeleton count={4} />
                ) : (
                    relatedPosts?.map((post: PostType, index: number) => (
                        <RelatedArticleCard key={index} post={post} />
                    ))
                )}

            </div>
        </div>
    );
};

export default RelatedArticles;
