"use client";

import React from "react";
import Link from "next/link";
import { Image as HeroImage } from "@heroui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { PostType } from "@/types";

interface PostCardThreeProps {
    post: PostType;
}

const PostCardThree: React.FC<PostCardThreeProps> = ({ post }) => {

    const href = `/blog/${post.id}`;

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-black/10 dark:border-white/10 
            overflow-hidden flex flex-col p-2 space-y-2">

            <HeroImage src={post.image} alt={post.title} width={500} isZoomed
                className="w-full h-60 object-cover rounded-lg" radius="md" />

            <div className="p-1 flex flex-col flex-1">

                <div className="flex justify-between items-center pb-4">

                    <span className="py-1.5 px-3 bg-brand text-white text-[10px] rounded-md">
                        {post.category?.toUpperCase() || "LIFESTYLE"}
                    </span>

                    <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                        {post.readMinutes || 5} min read
                    </span>

                </div>

                {/* ====== TITLE & DESCRIPTION ====== */}
                <div className="flex flex-col gap-2 pb-3">
                    <Link href={href} className="text-gray-900 dark:text-gray-100 text-base font-semibold leading-snug font-['Cabin'] hover:text-brand">
                        {post.title}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-5 !line-clamp-2">
                        {post.subtitle}
                    </p>
                </div>

                {/* ====== READ MORE ====== */}
                <Link href={href} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-xs 2xl:text-sm font-medium">
                    Keep reading
                    <RiArrowRightUpLine className="text-lg" />
                </Link>

            </div>

        </div>
    );
};

export default PostCardThree;
