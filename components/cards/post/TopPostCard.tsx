"use client"

import React from "react";
import Link from "next/link";
import { User } from "@heroui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";
import moment from "moment";
import { PostType } from "@/types";

interface TopPostCardProps {
    variant?: "compact" | "stacked";
    post: PostType;
}

const TopPostCard: React.FC<TopPostCardProps> = ({ variant = "compact", post }) => {

    const isStacked = variant === "stacked";
    

    return (
        <div className={`flex flex-col ${!isStacked ? "md:flex-row items-center gap-6 md:gap-12" : "gap-5"}`}>

            {/* ================= IMAGE ================= */}
            <div className={`relative bg-black rounded-tr-3xl rounded-bl-3xl overflow-hidden
                ${isStacked ? "rounded-b-3xl !rounded-tr-none w-full aspect-[9/7] md:aspect-auto md:h-[533px]"
                    : "w-full md:w-1/2 aspect-[9/7] md:aspect-auto md:h-[533px] "
                }`}>
                <Image src={post.image} alt={post.title} width={900} height={500} className="w-full h-full object-cover" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className={`flex-1 ${isStacked ? "space-y-2" : "space-y-4"}`}>

                {!isStacked && (
                    <h6 className="text-sm font-medium text-brand uppercase mb-4 md:mb-8">
                        {post.category}
                    </h6>
                )}

                {/* ====== TITLE  ====== */}
                <Link href={`/blog/${post.id}`} className="block text-base 2xl:text-lg font-semibold text-gray-900 
                    dark:text-gray-200 hover:!text-brand">
                    {post.title}
                </Link>

                {/* ================= AUTHOR / DATE ================= */}
                <div className="inline-flex items-center gap-3 flex-wrap">

                    <User avatarProps={{
                            src: post.author.avatar,
                            size: "sm",
                        }}
                        name={post.author.name}
                    />

                    <div className="w-px h-4 bg-black/25 dark:bg-white/25" />

                    <span className="text-neutral-700 dark:text-gray-400 text-sm">
                        {moment(post.publishedAt).format("MMMM D, YYYY")}
                    </span>

                </div>

                <p className={`text-sm md:text-base text-gray-500 dark:text-gray-400 leading-6 
                    ${isStacked ? "line-clamp-3 max-w-7xl" : "line-clamp-3" }`}>
                    {post.subtitle}
                </p>

                {/* ====== READ MORE ONLY FOR STACKED ====== */}
                {isStacked && (
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-xs 2xl:text-sm">
                        Keep reading 
                        <RiArrowRightUpLine className="text-lg" />
                    </Link>
                )}

            </div>
            
        </div>
    );
};

export default TopPostCard;
