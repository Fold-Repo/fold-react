import React from "react";

// Best Categories Skeleton
export const BestCategoriesSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8">
            {/* Title Skeleton */}
            <div className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
            </div>

            {/* Products Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col animate-pulse">
                        {/* Image Skeleton */}
                        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
                        
                        {/* Content Skeleton */}
                        <div className="space-y-2 pt-3">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full mt-3"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Popular Products Skeleton
export const Home2PopularProductsSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8">
            {/* Title Skeleton */}
            <div className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
            </div>

            {/* Products Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col animate-pulse">
                        {/* Image Skeleton */}
                        <div className="w-full aspect-9/8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                        
                        {/* Content Skeleton */}
                        <div className="p-0.5 flex flex-col space-y-2 flex-grow pt-2 pb-4">
                            <div className="flex justify-between items-center">
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                            </div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                        </div>

                        {/* Bottom Section Skeleton */}
                        <div className="px-1 flex items-center justify-between border-t border-gray-300 pt-4 pb-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                            <div className="flex items-center gap-3">
                                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// News Articles Skeleton
export const NewsArticlesSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8">
            {/* Title Skeleton */}
            <div className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
            </div>

            {/* Articles Grid Skeleton */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-500 rounded-lg overflow-hidden flex flex-col space-y-1 animate-pulse">
                        {/* Image Skeleton */}
                        <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        
                        {/* Content Skeleton */}
                        <div className="pt-3 px-2 space-y-3">
                            {/* Category Badge Skeleton */}
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-20"></div>
                            
                            {/* Title Skeleton */}
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            </div>
                            
                            {/* Author and Date Skeleton */}
                            <div className="flex items-center gap-2">
                                <div className="h-7 w-7 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button Skeleton */}
            <div className="flex items-center justify-center">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
            </div>
        </div>
    );
};
