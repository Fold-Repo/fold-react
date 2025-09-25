"use client";

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PostBannerTwo, PostContent } from "@/components/blog"
import { PostBannerTwoSkeleton, PostContentSkeleton } from "@/components/skeleton"
import { RelatedArticles } from "./section"
import { useGetPostById } from "@/service"
import React, { useEffect, useState } from "react"

const BlogDetailsTwoView = () => {
    
    const [postId, setPostId] = useState<number>(1);

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 20) + 1;
        setPostId(randomId);
    }, []);

    const { response: post, isLoading: isPostLoading } = useGetPostById(postId);

    return (
        <>
            <Header />

            <div className="pb-12 space-y-16 md:space-y-20">

                {/* ================= POST BANNER ================= */}
                {isPostLoading ? (
                    <PostBannerTwoSkeleton />
                ) : (
                    post && <PostBannerTwo post={post} />
                )}

                {/* ================= POST CONTENT ================= */}
                <div className="container space-y-12">

                    {isPostLoading ? (

                        <PostContentSkeleton />

                    ) : (

                        post && <PostContent post={post} />

                    )}

                    {/* ================= RELATED ARTICLES ================= */}
                    <RelatedArticles postId={postId} gridVariant="grid-2" />

                </div>

            </div>

            <Footer />

        </>
    )
}

export default BlogDetailsTwoView