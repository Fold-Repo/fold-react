"use client";

import React from "react";
import { User } from "@heroui/react";
import Image from "next/image";
import moment from "moment";
import { PostType } from "@/types";

interface PostBannerTwoProps {
    post: PostType;
}

const PostBannerTwo: React.FC<PostBannerTwoProps> = ({ post }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-center gap-5 max-h-auto md:max-h-[600px] 
            bg-gradient-to-br from-blue-600 to-sky-900 p-4 md:p-0">

            {/* ====== IMAGE ====== */}
            <Image 
                src={post.image} 
                alt={post.title}
                width={600}
                height={534}
                className="w-full md:w-[60%] md:h-[534px] object-cover rounded-lg md:rounded-r-lg md:-ml-4 md:relative md:top-10"
            />

            {/* ====== CONTENT ====== */}
            <div className="md:w-[40%] flex flex-col w-full md:max-w-2xl space-y-4">

                {/* ====== TITLE ====== */}
                <h2 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-200">
                    {post.title}
                </h2>

                {/* ====== AUTHOR / DATE ====== */}
                <div className="inline-flex flex-wrap items-center gap-3 text-xs text-gray-300">

                    <div className="flex items-center gap-2">
                        <User
                            avatarProps={{
                                src: post.author.avatar,
                                size: "sm"
                            }}
                            name={post.author.name}
                        />
                    </div>

                    <div className="hidden sm:block w-px h-4 bg-gray-200"></div>

                    <span>{moment(post.publishedAt).format("MMMM D, YYYY")}</span>

                    <div className="hidden sm:block w-px h-4 bg-gray-200"></div>

                    <span>{post.readMinutes || 5} Mins Read</span>
                </div>

            </div>

        </div>
    );
};

export default PostBannerTwo;
