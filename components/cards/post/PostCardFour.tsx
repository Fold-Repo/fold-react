"use client"

import React from "react"
import Link from "next/link"
import { Image } from "@heroui/react"
// import { UserIcon, CalendarIcon } from "@heroicons/react/24/outline"
import { PostType } from "@/types"

interface PostCardFourProps {
    // Support both individual props (legacy) and PostType object (new)
    post?: PostType
    // Legacy individual props
    id?: string
    title?: string
    category?: string
    image?: string
    author?: string
    authorAvatar?: string
    date?: string
    href?: string
}

const PostCardFour: React.FC<PostCardFourProps> = ({
    post,
    id,
    title,
    category,
    image,
    author,
    authorAvatar,
    date,
    href
}) => {
    // Use post object if provided, otherwise fall back to individual props
    const postData = post || {
        id: id || "",
        title: title || "",
        category: category || "",
        image: image || "",
        author: { name: author || "", avatar: authorAvatar || "" },
        publishedAt: date || "",
        slug: href || ""
    }

    // Generate href from slug if not provided
    const postHref = href || (postData.slug ? `/blog/${postData.slug}` : "#")
    return (
        <div className="p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-500
            rounded-lg overflow-hidden flex flex-col space-y-1">

            {/* ================= BLOG IMAGE ================= */}
            <Link href={postHref}>
                <Image
                    src={postData.image}
                    alt={postData.title}
                    width={400}
                    height={224}
                    className="w-full h-56 object-cover rounded-lg"
                    radius="lg"
                />
            </Link>

            {/* ================= BLOG CONTENT ================= */}
            <div className="pt-3 px-2 space-y-3">

                {/* ================= CATEGORY ================= */}
                <span className="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-md 
                    text-[12px] font-medium bg-indigo-500/5 text-indigo-500">
                    {postData.category}
                </span>

                {/* ================= TITLE ================= */}
                <Link href={postHref} className="font-semibold text-base hover:text-brand line-clamp-2">
                    {postData.title}
                </Link>

                {/* ================= AUTHOR & DATE ================= */}
                <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                    <div className="flex items-center gap-2">
                        <Image
                            src={postData.author.avatar}
                            alt={postData.author.name}
                            width={28}
                            height={28}
                            className="inline-block size-7 rounded-full object-cover"
                            radius="full"
                        />
                        <span>{postData.author.name}</span>
                    </div>
                    <span>{postData.publishedAt}</span>
                </div>

            </div>

        </div>
    )
}

export default PostCardFour
