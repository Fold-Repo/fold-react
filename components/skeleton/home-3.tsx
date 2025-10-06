import React from "react"

// ProductCardSix Skeleton
export const Home3ProductCardSixSkeleton: React.FC = () => {
    return (
        <div className="relative p-1.5 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col animate-pulse">
            <div className="relative">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="absolute top-2 left-2 w-16 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
            <div className="space-y-1 md:space-y-1.5 pt-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="flex items-end gap-2">
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded mt-3"></div>
            </div>
        </div>
    )
}

// ProductCardSeven Skeleton
export const Home3ProductCardSevenSkeleton: React.FC = () => {
    return (
        <div className="relative p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col animate-pulse">
            <div className="relative">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="absolute top-2 left-2 w-16 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
            <div className="p-0.5 flex flex-col space-y-2 flex-grow pt-3">
                <div className="inline-flex flex-wrap items-center justify-between gap-2">
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                <div className="flex items-end gap-2">
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
            </div>
            <div className="px-1 flex flex-wrap lg:flex-nowrap items-center justify-between gap-1 py-2 mt-3">
                <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
        </div>
    )
}

// RoomCard Skeleton
export const RoomCardSkeleton: React.FC = () => {
    return (
        <div className="relative p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col animate-pulse">
            <div className="w-full aspect-9/8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="flex items-center justify-center py-5 mt-3">
                <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
        </div>
    )
}

// DealsYouCantMiss Skeleton
export const DealsYouCantMissSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Home3ProductCardSixSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// SpecialProducts Skeleton
export const SpecialProductsSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Home3ProductCardSevenSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

// ShopByRoom Skeleton
export const ShopByRoomSkeleton: React.FC = () => {
    return (
        <div className="container space-y-8">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <RoomCardSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}
