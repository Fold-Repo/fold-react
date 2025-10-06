"use client"

import React from "react"
import Link from "next/link"
import { Image } from "@heroui/react"
// import { UserIcon, CalendarIcon } from "@heroicons/react/24/outline"

interface PostCardFourProps {
    id: string
    title: string
    category: string
    image: string
    author: string
    authorAvatar: string
    date: string
    href: string
}

const PostCardFour: React.FC<PostCardFourProps> = ({
    title,
    category,
    image,
    author,
    authorAvatar,
    date,
    href
}) => {
    return (
        <div className="p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-500
            rounded-lg overflow-hidden flex flex-col space-y-1">

            {/* ================= BLOG IMAGE ================= */}
            <Link href={href}>
                <Image
                    src={image}
                    alt={title}
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
                    {category}
                </span>

                {/* ================= TITLE ================= */}
                <Link href={href} className="font-semibold text-base hover:text-brand line-clamp-2">
                    {title}
                </Link>

                {/* ================= AUTHOR & DATE ================= */}
                <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                    <div className="flex items-center gap-2">
                        <Image
                            src={authorAvatar}
                            alt={author}
                            width={28}
                            height={28}
                            className="inline-block size-7 rounded-full object-cover"
                            radius="full"
                        />
                        <span>{author}</span>
                    </div>
                    <span>{date}</span>
                </div>

            </div>

        </div>
    )
}

export default PostCardFour
