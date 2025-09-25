"use client";

import React from "react";
import { User } from "@heroui/react";
import Image from "next/image";
import moment from "moment";
import { PostType } from "@/types";

interface PostBannerProps {
    post: PostType;
}

const PostBanner: React.FC<PostBannerProps> = ({ post }) => {
    return (
        <div className="flex flex-col gap-5">
            
            <div className="flex flex-col justify-center text-center max-w-2xl mx-auto space-y-3">

                <h2 className="block text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 dark:text-gray-200">
                    {post.title}
                </h2>

                {/* ====== AUTHOR / DATE ====== */}
                <div className="inline-flex items-center justify-center gap-3 flex-wrap text-sm">

                    <User
                        avatarProps={{
                            src: post.author.avatar,
                            size: "sm"
                        }}
                        name={post.author.name}
                    />

                    <div className="w-px h-4 bg-black/25 dark:bg-white/25"></div>

                    <span className="text-neutral-700 dark:text-gray-400">
                        {moment(post.publishedAt).format("MMMM D, YYYY")}
                    </span>

                    <div className="w-px h-4 bg-black/25 dark:bg-white/25"></div>

                    <span className="text-neutral-700 dark:text-gray-400">
                        {post.readMinutes || 5} Mins Read
                    </span>

                </div>

            </div>

            {/* ====== IMAGE ====== */}
            <div className="relative bg-black rounded-2xl w-full aspect-9/7 md:aspect-auto md:h-[533px] overflow-hidden">
                <Image src={post.image} alt={post.title} width={1200}height={533} 
                    className="w-full h-full object-top object-cover" />
            </div>

        </div>
    );
};

export default PostBanner;
