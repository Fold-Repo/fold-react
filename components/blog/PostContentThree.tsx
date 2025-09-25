"use client";

import React from "react";
import Image from "next/image";
import { PostType } from "@/types";

interface PostContentThreeProps {
    post: PostType;
}

const PostContentThree: React.FC<PostContentThreeProps> = ({ post }) => {
    return (
        <>

            <h2 className="text-lg font-semibold leading-8">
                Optimizing your sales team is key to company-wide success. However, even the highest-performing sales teams sometimes experience common issues that hinder their relationships. Successfully overcoming sales challenges is what a successful company that is just drifting along apart from a successful one.
            </h2>

            <Image src={post.image} alt={post.title} width={1200} height={457}
                className="aspect-7/4 object-cover rounded-xl" />

            {post?.content && (
                <div
                    className="text-sm text-gray-700 dark:text-gray-400 leading-7 prose prose-sm max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{
                        __html: post.content.replace(/\n\n/g, "<br /><br />")
                    }}
                />
            )}

        </>
    );
};

export default PostContentThree;
