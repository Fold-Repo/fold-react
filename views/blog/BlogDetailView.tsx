"use client";

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PostBannerSkeleton } from "@/components/skeleton"
import { useGetPostById } from "@/service"
import React from "react"
import { BlogLayout } from "./components"
import { PostBanner } from "@/components/blog"
import { RelatedArticles, TrendingPosts } from "./section"

interface BlogDetailViewProps {
    postId: string;
}

const BlogDetailView: React.FC<BlogDetailViewProps> = ({ postId }) => {

    const numericPostId = parseInt(postId, 10);
    const { response: post, isLoading: isPostLoading } = useGetPostById(numericPostId);

    return (
        <>
            <Header />

            <div className="section-lg container space-y-7">

                {/* ================= POST BANNER ================= */}
                {isPostLoading ? (
                    <PostBannerSkeleton />
                ) : (
                    post && <PostBanner post={post} />
                )}

                {/* ================= POSTS DETAILS / RELATED ================= */}
                <BlogLayout
                    left={
                        <>
                        
                            {/* ===== POST DETAILS ===== */}
                            <div className="space-y-7">

                                {post?.content && (
                                    <div 
                                        className="leading-7 text-sm prose prose-sm max-w-none dark:prose-invert"
                                        dangerouslySetInnerHTML={{ 
                                            __html: post.content.replace(/\n\n/g, "<br /><br />") 
                                        }}
                                    />
                                )}

                                {/* ===== RELATED ARTICLES ====== */}
                                <RelatedArticles postId={numericPostId} />

                            </div>
                        </>
                    }
                    right={<TrendingPosts />}
                />
            </div>

            <Footer />
        </>
    )
}

export default BlogDetailView