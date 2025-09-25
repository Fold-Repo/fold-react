"use client";

import React from "react";
import Link from "next/link";
import { Image as HeroImage } from "@heroui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import moment from "moment";
import { PostType } from "@/types";

interface PostCardTwoProps {
    post: PostType;
    variant?: "default" | "reversed";
}

const PostCardTwo: React.FC<PostCardTwoProps> = ({ post, variant = "default" }) => {
    const href = `/blog/${post.id}`;
    const isReversed = variant === "reversed";

    return (
        <div className="p-1.5 bg-white dark:bg-gray-800 rounded-md overflow-hidden flex flex-col space-y-1">

            {/* ====== IMAGE ====== */}
            <HeroImage src={post.image} alt={post.title} width={900} isZoomed
            className="w-full h-56 object-cover rounded-lg" radius="md"/>

            {/* ====== CONTENT ====== */}
            <div className="p-2 flex flex-col gap-2">
                {isReversed ? (

                    <>
                        <span className="text-gray-500 dark:text-gray-400 text-[11px]">
                            {post.readMinutes || 4} min | {moment(post.publishedAt).format("MMMM D, YYYY")}
                        </span>

                        <Link href={href} className="font-semibold text-base hover:text-brand line-clamp-2">
                            {post.title}
                        </Link>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-5 !line-clamp-2">
                            {post.subtitle}
                        </p>

                        {/* ====== READ MORE ====== */}
                        <Link href={href} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-xs 2xl:text-sm font-medium">
                            Read More
                            <RiArrowRightUpLine className="text-lg" />
                        </Link>

                    </>
                ) : (

                    <>

                        <Link href={href} className="font-semibold text-base hover:text-brand line-clamp-2">
                            {post.title}
                        </Link>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-5 !line-clamp-3">
                            {post.subtitle}
                        </p>

                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                            {post.readMinutes || 4} min | {moment(post.publishedAt).format("MMMM D, YYYY")}
                        </span>

                    </>

                )}
            </div>

        </div>
    );
};

export default PostCardTwo;
