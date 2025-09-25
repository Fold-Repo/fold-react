"use client";

import React from "react";
import { User } from "@heroui/react";
import { RiFacebookCircleFill, RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";
import moment from "moment";
import { PostType } from "@/types";
import { RelatedArticlesTwo } from "@/views/blog/section";

interface PostSidebarTwoProps {
    post: PostType;
    postId: number;
}

const PostSidebarTwo: React.FC<PostSidebarTwoProps> = ({ post, postId }) => {
    return (
        <div className="space-y-5 sticky top-4">

            <div className="inline-flex items-center gap-3 flex-wrap text-xs">
                <div className="flex items-center gap-3">
                    <User
                        avatarProps={{
                            src: post.author.avatar,
                            size: "sm"
                        }}
                        name={post.author.name}
                    />
                </div>

                <div className="w-px h-4 bg-black/25 dark:bg-white/25"></div>

                <span className="text-neutral-700 dark:text-gray-400">
                    {moment(post.publishedAt).format("MMMM D, YYYY")}
                </span>

                {/* === SOCIAL MEDIA === */}
                <div className="flex items-center gap-2 text-brand text-lg">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand/80 transition-colors">
                        <RiFacebookCircleFill />
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand/80 transition-colors">
                        <RiTwitterXFill />
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand/80 transition-colors">
                        <RiLinkedinBoxFill />
                    </a>
                </div>
            </div>

            {/* ====== RELATED ARTICLES ====== */}
            <RelatedArticlesTwo postId={postId} />
            
        </div>
    );
};

export default PostSidebarTwo;
