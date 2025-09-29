"use client";

import React from "react";
import { SkeletonBox, SkeletonCircle, SkeletonText } from "../base";

export const PostSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-7 py-5">
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <SkeletonCircle width="32px" height="32px" />
                    <SkeletonBox height="12px" width="112px" />
                </div>
                <SkeletonText lines={3} />
                <SkeletonBox height="12px" width="80px" />
            </div>
            <SkeletonBox className="flex-1 w-full max-h-60 md:max-h-70 rounded-lg" />
        </div>
    );
};

export const PostListSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <PostSkeleton key={idx} />
            ))}
        </>
    );
};

export const TrendingSkeleton: React.FC = () => {
    return (
        <div className="flex justify-start items-center gap-3 py-3">
            <SkeletonBox className="relative w-22 aspect-square rounded-lg" />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
                <SkeletonBox height="16px" width="66%" />
                <SkeletonBox height="12px" width="83%" />
                <SkeletonBox height="12px" width="96px" />
            </div>
        </div>
    );
};

export const TrendingListSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <TrendingSkeleton key={idx} />
            ))}
        </>
    );
};

export const TopPostSkeleton: React.FC<{ variant?: "compact" | "stacked" }> = ({ variant = "compact" }) => {

    const isStacked = variant === "stacked";
    
    return (
        <div className={`flex flex-col ${!isStacked ? "md:flex-row items-center gap-6 md:gap-12" : "gap-5"}`}>

            <SkeletonBox className={`relative rounded-tr-3xl rounded-bl-3xl overflow-hidden
                ${isStacked ? "rounded-b-3xl !rounded-tr-none w-full aspect-[9/7] md:aspect-auto md:h-[533px]"
                    : "w-full md:w-1/2 aspect-[9/7] md:aspect-auto md:h-[533px]"
                }`} />

            <div className={`flex-1 space-y-4 w-full ${isStacked ? "space-y-3" : "space-y-4"}`}>
                
                {!isStacked && (
                    <SkeletonBox height="16px" width="80px" />
                )}
                
                <SkeletonBox height="24px" width="75%" />
                
                <div className="flex items-center gap-3">
                    <SkeletonCircle width="32px" height="32px" />
                    <SkeletonBox height="16px" width="4px" />
                    <SkeletonBox height="16px" width="96px" />
                </div>
                
                <SkeletonText lines={3} />
                
                {isStacked && (
                    <SkeletonBox height="16px" width="96px" />
                )}
                
            </div>

        </div>
    );
};

export const CategorySkeleton: React.FC = () => {
    return (
        <div className="flex items-center justify-between py-3">
            <SkeletonBox height="16px" width="80px" />
            <SkeletonCircle width="28px" height="28px" />
        </div>
    );
};

export const CategoryListSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <CategorySkeleton key={idx} />
            ))}
        </>
    );
};

export const PostCardTwoSkeleton: React.FC = () => {
    return (
        <div className="p-1.5 bg-white dark:bg-gray-800 rounded-md overflow-hidden flex flex-col space-y-1">

            <SkeletonBox className="w-full h-56 rounded-lg" />
            
            <div className="p-2 flex flex-col gap-2">
                <SkeletonBox height="16px" width="75%" />
                <SkeletonText lines={3} />
                <SkeletonBox height="12px" width="80px" />
            </div>
        </div>
    );
};

export const PostCardTwoListSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <PostCardTwoSkeleton key={idx} />
            ))}
        </>
    );
};

export const PostCardThreeSkeleton: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden flex flex-col p-2 space-y-2">

            <SkeletonBox className="w-full h-60 rounded-lg" />
            
            <div className="p-1 flex flex-col flex-1">
                
                <div className="flex justify-between items-center pb-4">
                    <SkeletonBox height="24px" width="80px" className="rounded-md" />
                    <SkeletonBox height="16px" width="64px" />
                </div>
                
                <div className="flex flex-col gap-2 pb-3">
                    <SkeletonBox height="20px" width="100%" />
                    <SkeletonText lines={2} />
                </div>
                
                <SkeletonBox height="16px" width="80px" />

            </div>
            
        </div>
    );
};

export const PostCardThreeListSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <PostCardThreeSkeleton key={idx} />
            ))}
        </>
    );
};

export const RelatedArticleSkeleton: React.FC = () => {
    return (
        <div className="max-w-3xl flex flex-col sm:flex-row items-start gap-4">
            {/* Image skeleton */}
            <SkeletonBox className="w-full sm:w-48 aspect-9/6 rounded-md" />
            
            {/* Content skeleton */}
            <div className="flex-1 flex flex-col gap-2">
                {/* Meta skeleton */}
                <div className="flex items-center gap-2">
                    <SkeletonBox height="12px" width="80px" />
                    <SkeletonBox height="12px" width="4px" />
                    <SkeletonBox height="12px" width="64px" />
                </div>
                
                {/* Title skeleton */}
                <SkeletonBox height="20px" width="100%" />
                
                {/* Description skeleton */}
                <SkeletonText lines={2} />
            </div>
        </div>
    );
};

export const RelatedArticleListSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <RelatedArticleSkeleton key={idx} />
            ))}
        </>
    );
};

export const PostBannerSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center text-center max-w-2xl mx-auto space-y-3">
                
                <SkeletonBox height="32px" width="75%" className="mx-auto" />
                
                <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-3">
                        <SkeletonCircle width="28px" height="28px" />
                        <SkeletonBox height="16px" width="96px" />
                    </div>
                    <SkeletonBox height="16px" width="4px" />
                    <SkeletonBox height="16px" width="80px" />
                    <SkeletonBox height="16px" width="4px" />
                    <SkeletonBox height="16px" width="64px" />
                </div>
            </div>
            
            <SkeletonBox className="relative rounded-2xl w-full aspect-9/7 md:aspect-auto md:h-[533px]" />
        </div>
    );
};

export const PostBannerTwoSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-center gap-5 max-h-auto md:max-h-[600px] 
            bg-gradient-to-br from-blue-600 to-sky-900 p-4 md:p-0">
            
            <SkeletonBox className="w-full md:w-[60%] md:h-[534px] rounded-lg md:rounded-r-lg md:-ml-4 md:relative md:top-10" />
            
            <div className="md:w-[40%] flex flex-col w-full md:max-w-2xl space-y-4">

                <SkeletonBox height="32px" width="100%" />
                
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <SkeletonCircle width="24px" height="24px" />
                        <SkeletonBox height="16px" width="80px" />
                    </div>
                    <SkeletonBox height="16px" width="4px" />
                    <SkeletonBox height="16px" width="64px" />
                    <SkeletonBox height="16px" width="4px" />
                    <SkeletonBox height="16px" width="48px" />
                </div>
            </div>
        </div>
    );
};

export const PostContentSkeleton: React.FC = () => {
    return (
        <div className="container space-y-12">
            
            <SkeletonText lines={6} />
            
            <div className="grid sm:grid-cols-2 gap-4">
                <SkeletonBox className="aspect-7/5 rounded-tr-xl rounded-bl-xl" />
                <SkeletonBox className="aspect-7/5 rounded-tr-xl rounded-bl-xl" />
            </div>
            
            <SkeletonText lines={3} />
        </div>
    );
};

export const PostBannerThreeSkeleton: React.FC = () => {
    return (
        <div className="bg-brand pt-12 pb-5 relative overflow-hidden">
            <div className="relative container lg:!max-w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-center z-5">
                
                <div className="max-w-md space-y-5 lg:space-y-8">

                    <SkeletonBox height="32px" width="100%" />
                    <SkeletonBox height="40px" width="100%" />

                </div>
                
                <SkeletonBox className="w-full md:w-[50%] h-64 rounded-lg md:rounded-r-lg" />
                
            </div>
            
            <SkeletonBox className="absolute bottom-0 w-full h-20" />

        </div>
    );
};

export const PostContentThreeSkeleton: React.FC = () => {
    return (
        <div>

            <SkeletonBox height="32px" width="100%" />
            
            <SkeletonBox className="aspect-7/4 rounded-xl" />
            
            <SkeletonText lines={6} />
        </div>
    );
};

export const RelatedArticleTwoSkeleton: React.FC = () => {
    return (
        <div className="flex-1 min-w-0 flex flex-col gap-y-1.5 py-2">
            <SkeletonBox height="20px" width="100%" />
            <SkeletonText lines={2} />
        </div>
    );
};

export const RelatedArticleTwoListSkeleton: React.FC<{ count: number }> = ({ count }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <RelatedArticleTwoSkeleton key={index} />
            ))}
        </>
    );
};

export const PostBannerFourSkeleton: React.FC = () => {
    return (
        <div className="bg-brand pt-12 pb-5 relative overflow-hidden">
            <div className="relative container lg:!max-w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-center z-5">
                
                <div className="max-w-md space-y-5 lg:space-y-8">
                    <SkeletonBox height="32px" width="100%" />
                </div>
                
                <SkeletonBox className="w-full md:w-[50%] h-64 rounded-lg md:rounded-r-lg" />
            </div>
            

            <SkeletonBox className="absolute -bottom-2 sm:-bottom-16 w-full h-20" />
        </div>
    );
};


export const PostSidebarTwoSkeleton: React.FC = () => {
    return (
        <div className="w-full lg:w-[30%] 2xl:w-[30%]">
            <div className="space-y-5 sticky top-4">

                <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                        <SkeletonCircle width="28px" height="28px" />
                        <SkeletonBox height="16px" width="80px" />
                    </div>
                    <SkeletonBox height="16px" width="4px" />
                    <SkeletonBox height="16px" width="64px" />
                    <div className="flex items-center gap-2">
                        <SkeletonBox height="20px" width="20px" />
                        <SkeletonBox height="20px" width="20px" />
                        <SkeletonBox height="20px" width="20px" />
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-4">
                    <SkeletonBox height="24px" width="128px" className="border-b border-gray-300 pb-2" />
                    <div className="space-y-1">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <RelatedArticleTwoSkeleton key={index} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};


