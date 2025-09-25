"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@heroui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import moment from "moment";
import { PostType } from "@/types";

interface Props {
    post: PostType;
}

const PostCard: React.FC<Props> = ({ post }) => {

    const href = `/blog/${post.id}`;

    return (
        <div className="flex flex-col md:flex-row items-start gap-7 py-5">

            <div className="flex-1 flex flex-col gap-4">

                <div className="flex items-center gap-3">
                    <User avatarProps={{
                            src: post.author.avatar,
                            size: "sm",
                        }}
                        name={post.author.name}
                    />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{moment(post.publishedAt).format("MMMM D, YYYY")}</span>
                </div>

                <div className="flex flex-col gap-2">

                    <Link href={href} className="text-base 2xl:text-lg font-semibold 
                        text-gray-900 dark:text-gray-200 hover:!text-brand">
                        {post.title}
                    </Link>

                    <p className="text-neutral-700 dark:text-gray-400 text-sm leading-6 line-clamp-3">
                        {post.subtitle}
                    </p>
                    
                </div>

                <Link href={href} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-xs 2xl:text-sm">
                    Read More 
                    <RiArrowRightUpLine className="text-lg" />
                </Link>

            </div>

            <div className="flex-1 w-full max-h-60 md:max-h-70 overflow-hidden rounded-lg">
                <Image src={post.image} alt={post.title} width={900} height={300}
                    className="w-full h-full object-cover" />
            </div>

        </div>
    );
};

export default PostCard;
