"use client";

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PostBannerThree, PostContentThree } from "@/components/blog"
import { PostBannerThreeSkeleton, PostContentThreeSkeleton } from "@/components/skeleton"
import { LatestNews, RelatedArticlesTwo } from "./section"
import { BlogLayout } from "./components"
import { useGetPostById } from "@/service"
import React, { useEffect, useState } from "react"

const BlogDetailsThreeView = () => {
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
                    <PostBannerThreeSkeleton />
                ) : (
                    post && <PostBannerThree post={post} />
                )}

                <div className="container space-y-12">

                    {/* ================= LATEST NEWS ================= */}
                    <LatestNews />

                    {/* ================= POSTS DETAILS ================= */}
                    <BlogLayout
                        left={
                            <>
                                {isPostLoading ? (
                                    <PostContentThreeSkeleton />
                                ) : (
                                    post && <PostContentThree post={post} />
                                )}
                            </>
                        }
                        right={<RelatedArticlesTwo postId={postId} />}
                    />
                </div>

            </div>

            <Footer />
        </>
    )
}

export default BlogDetailsThreeView