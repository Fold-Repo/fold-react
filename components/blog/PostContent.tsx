"use client";

import React from "react";
import Image from "next/image";
import { PostType } from "@/types";

interface PostContentProps {
    post: PostType;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    return (
        <>

            {post?.content && (
                <div 
                    className="text-sm text-gray-700 dark:text-gray-400 leading-7 prose prose-sm max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ 
                        __html: post.content.replace(/\n\n/g, "<br /><br />") 
                    }}
                />
            )}

            {/* ====== IMAGE GALLERY ====== */}
            <div className="grid sm:grid-cols-2 gap-4">
                
                <Image 
                    src={post.image} 
                    alt={post.title}
                    width={800}
                    height={800}
                    className="aspect-7/5 object-cover rounded-tr-xl rounded-bl-xl"
                />

                <Image 
                    src={post.image} 
                    alt={post.title}
                    width={800}
                    height={800}
                    className="aspect-7/5 object-cover rounded-tr-xl rounded-bl-xl"
                />

            </div>

            {/* ====== ADDITIONAL CONTENT ====== */}
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

export default PostContent;
