"use client";

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PostBannerFour, PostContentThree, PostSidebarTwo } from "@/components/blog"
import { PostBannerFourSkeleton, PostContentThreeSkeleton, PostSidebarTwoSkeleton } from "@/components/skeleton"
import { LatestNews } from "./section"
import { BlogLayout } from "./components"
import { useGetPostById } from "@/service"
import React, { useEffect, useState } from "react"

const BlogDetailFourView = () => {
    
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
                    <PostBannerFourSkeleton />
                ) : (
                    post && <PostBannerFour post={post} />
                )}

                <div className="container space-y-12">

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
                        right={
                            isPostLoading ? (
                                <PostSidebarTwoSkeleton />
                            ) : (
                                post && <PostSidebarTwo post={post} postId={postId} />
                            )
                        }
                        reversed={true}
                    />

                    {/* ================= LATEST NEWS ================= */}
                    <LatestNews />

                </div>

            </div>

            <Footer />
        </>
    )
}

export default BlogDetailFourView