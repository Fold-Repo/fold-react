"use client";

import React from "react";
import Link from "next/link";
import { PostType } from "@/types";

interface RelatedArticleTwoProps {
    post: PostType;
}

const RelatedArticleTwo: React.FC<RelatedArticleTwoProps> = ({ post }) => {
    const href = `/blog/${post.id}`;

    return (
        <div className="flex-1 min-w-0 flex flex-col gap-y-1.5 py-2">
            <Link href={href} className="capitalize text-brand text-base underline font-semibold !line-clamp-1">
                {post.title}
            </Link>
            <div className="text-black/60 dark:text-gray-400 text-sm line-clamp-2">
                {post.subtitle}
            </div>
        </div>
    );
};

export default RelatedArticleTwo;
