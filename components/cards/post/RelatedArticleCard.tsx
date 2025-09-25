"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostType } from "@/types";

interface RelatedArticleCardProps {
    post: PostType;
}

const RelatedArticleCard: React.FC<RelatedArticleCardProps> = ({ post }) => {
    const href = `/blog/${post.id}`;

    return (
        <div className="max-w-3xl flex flex-col sm:flex-row items-start gap-4">

            <Image 
                src={post.image} 
                alt={post.title} 
                width={192}
                height={128}
                className="w-full sm:w-48 aspect-9/6 object-cover rounded-md" 
            />

            <div className="flex-1 flex flex-col gap-2">
                
                <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 text-[11px] uppercase tracking-wide">
                    <span>{post.readMinutes || 1} Minute Read</span>
                    <span>-</span>
                    <span>{post.category || "Product"}</span>
                </div>

                <Link href={href} className="text-gray-900 dark:text-gray-100 text-base font-semibold line-clamp-1 hover:!text-brand">
                    {post.title}
                </Link>

                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {post.subtitle}
                </p>

            </div>

        </div>
    );
};

export default RelatedArticleCard;
