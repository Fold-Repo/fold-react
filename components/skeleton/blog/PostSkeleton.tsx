"use client";

import React from "react";

export const PostSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-7 py-5 animate-pulse">
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div className="h-3 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            <div className="flex-1 w-full max-h-60 md:max-h-70 rounded-lg bg-gray-200 dark:bg-gray-700" />
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
        <div className="flex justify-start items-center gap-3 py-3 animate-pulse">
            <div className="relative w-22 aspect-square rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
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
        <div className={`flex flex-col ${!isStacked ? "md:flex-row items-center gap-6 md:gap-12" : "gap-5"} animate-pulse`}>

            <div className={`relative bg-gray-200 dark:bg-gray-700 rounded-tr-3xl rounded-bl-3xl overflow-hidden
                ${isStacked ? "rounded-b-3xl !rounded-tr-none w-full aspect-[9/7] md:aspect-auto md:h-[533px]"
                    : "w-full md:w-1/2 aspect-[9/7] md:aspect-auto md:h-[533px]"
                }`}>
            </div>

            <div className={`flex-1 space-y-4 w-full ${isStacked ? "space-y-3" : "space-y-4"}`}>
                
                {!isStacked && (
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                )}
                
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                
                {isStacked && (
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                )}
                
            </div>

        </div>
    );
};

export const CategorySkeleton: React.FC = () => {
    return (
        <div className="flex items-center justify-between py-3 animate-pulse">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700" />
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
        <div className="p-1.5 bg-white dark:bg-gray-800 rounded-md overflow-hidden flex flex-col space-y-1 animate-pulse">

            <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            
            <div className="p-2 flex flex-col gap-2">
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
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
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden flex flex-col p-2 space-y-2 animate-pulse">
            

            <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            
            <div className="p-1 flex flex-col flex-1">
                
                <div className="flex justify-between items-center pb-4">
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-md" />
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                
                
                <div className="flex flex-col gap-2 pb-3">
                    <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="space-y-1">
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                </div>
                
                
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />

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
        <div className="max-w-3xl flex flex-col sm:flex-row items-start gap-4 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full sm:w-48 aspect-9/6 bg-gray-200 dark:bg-gray-700 rounded-md" />
            
            {/* Content skeleton */}
            <div className="flex-1 flex flex-col gap-2">
                {/* Meta skeleton */}
                <div className="flex items-center gap-2">
                    <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-1 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                
                {/* Title skeleton */}
                <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                
                {/* Description skeleton */}
                <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
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
        <div className="flex flex-col gap-5 animate-pulse">
            <div className="flex flex-col justify-center text-center max-w-2xl mx-auto space-y-3">
                
                <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
                
                <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700" />
                        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
            </div>
            
            <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl w-full aspect-9/7 md:aspect-auto md:h-[533px]" />
        </div>
    );
};

export const PostBannerTwoSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-center gap-5 max-h-auto md:max-h-[600px] 
            bg-gradient-to-br from-blue-600 to-sky-900 p-4 md:p-0 animate-pulse">
            
            <div className="w-full md:w-[60%] md:h-[534px] bg-gray-200 dark:bg-gray-700 rounded-lg md:rounded-r-lg md:-ml-4 md:relative md:top-10" />
            
            <div className="md:w-[40%] flex flex-col w-full md:max-w-2xl space-y-4">

                <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
                        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
            </div>
        </div>
    );
};

export const PostContentSkeleton: React.FC = () => {
    return (
        <div className="container space-y-12 animate-pulse">
            
            <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="aspect-7/5 bg-gray-200 dark:bg-gray-700 rounded-tr-xl rounded-bl-xl" />
                <div className="aspect-7/5 bg-gray-200 dark:bg-gray-700 rounded-tr-xl rounded-bl-xl" />
            </div>
            
            <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
        </div>
    );
};

export const PostBannerThreeSkeleton: React.FC = () => {
    return (
        <div className="bg-brand pt-12 pb-5 relative overflow-hidden animate-pulse">
            <div className="relative container lg:!max-w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-center z-5">
                
                <div className="max-w-md space-y-5 lg:space-y-8">

                    <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-10 w-92 bg-gray-200 dark:bg-gray-700 rounded" />

                </div>
                
                <div className="w-full md:w-[50%] h-64 bg-gray-200 dark:bg-gray-700 rounded-lg md:rounded-r-lg" />
                
            </div>
            
            <div className="absolute bottom-0 w-full h-20 bg-gray-200 dark:bg-gray-700" />

        </div>
    );
};

export const PostContentThreeSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse">

            <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            
            <div className="aspect-7/4 bg-gray-200 dark:bg-gray-700 rounded-xl" />
            
            <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
        </div>
    );
};

export const RelatedArticleTwoSkeleton: React.FC = () => {
    return (
        <div className="flex-1 min-w-0 flex flex-col gap-y-1.5 py-2 animate-pulse">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="space-y-1">
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
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
        <div className="bg-brand pt-12 pb-5 relative overflow-hidden animate-pulse">
            <div className="relative container lg:!max-w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-center z-5">
                
                <div className="max-w-md space-y-5 lg:space-y-8">
                    <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
                
                <div className="w-full md:w-[50%] h-64 bg-gray-200 dark:bg-gray-700 rounded-lg md:rounded-r-lg" />
            </div>
            

            <div className="absolute -bottom-2 sm:-bottom-16 w-full h-20 bg-gray-200 dark:bg-gray-700" />
        </div>
    );
};


export const PostSidebarTwoSkeleton: React.FC = () => {
    return (
        <div className="w-full lg:w-[30%] 2xl:w-[30%] animate-pulse">
            <div className="space-y-5 sticky top-4">

                <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700" />
                        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-4">
                    <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded border-b border-gray-300 pb-2" />
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


