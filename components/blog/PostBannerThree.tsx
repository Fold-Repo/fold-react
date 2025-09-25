"use client";

import React from "react";
import Image from "next/image";
import { PostType } from "@/types";

interface PostBannerThreeProps {
    post: PostType;
}

const PostBannerThree: React.FC<PostBannerThreeProps> = ({ post }) => {
    return (
        <div className="bg-brand pt-12 pb-5 relative overflow-hidden">

            <div className="relative container lg:!max-w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-center z-5">
                
                <div className="max-w-md space-y-5 lg:space-y-8">

                    <h2 className="text-xl xl:text-3xl font-semibold text-gray-100 leading-8 lg:leading-10">
                        Common Issues That Hurt Your Sales Team - And The Secret To Avoiding Them
                    </h2>

                </div>

                <Image src={post.image} alt={post.title}width={1000}
                height={500} className="w-full md:w-[50%] object-cover rounded-lg md:rounded-r-lg" />

            </div>

            <Image  className="absolute bottom-0 w-full" src="/img/rect_clip.svg"  alt="Clip"
            width={1200}  height={100} />

        </div>
    );
};

export default PostBannerThree;
