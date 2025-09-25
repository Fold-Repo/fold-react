"use client";

import React from "react";
import Link from "next/link";
import { Image as HeroImage } from "@heroui/react";
import moment from "moment";
import { PostType } from "@/types";

interface Props {
    post: PostType;
}

const TrendingPostCard: React.FC<Props> = ({ post }) => {

    const href = `/blog/${post.id}`;

    return (
        <div className="flex justify-start items-center gap-3 py-3">

            <div className="relative w-22 aspect-square rounded-lg overflow-hidden">
                <HeroImage radius="md" src={post.image} alt={post.title} width={88} 
                height={88} className="w-full h-full object-cover absolute inset-0" />
            </div>

            <div className="flex-1 min-w-0 flex flex-col gap-1">

                <Link href={href}
                    className="text-black dark:text-gray-100 hover:text-brand text-base font-medium line-clamp-1">
                    {post.title}
                </Link>

                <div className="text-black/60 dark:text-gray-400 text-xs line-clamp-1">
                    {post.subtitle}
                </div>

                <div className="text-black/60 dark:text-gray-400 text-sm">
                    {moment(post.publishedAt).fromNow()}
                </div>

            </div>

        </div>
    );
};

export default TrendingPostCard;
