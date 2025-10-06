import React from "react"

// ServiceCard Skeleton for Experience Making Beauty section
export const ServiceCardSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col justify-center bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden py-3 pl-5 pr-3 animate-pulse">
            <div className="relative">
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-lg -translate-x-2 translate-y-2"></div>
                <div className="relative w-full aspect-9/6 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-2 pt-6">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            </div>
            <div className="border-t border-gray-300 pt-3 mt-3">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            </div>
        </div>
    )
}

// ServiceCardTwo Skeleton for Recommended Services section
export const ServiceCardTwoSkeleton: React.FC = () => {
    return (
        <div className="relative p-1.5 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col animate-pulse">
            <div className="w-full aspect-9/8 bg-gray-300 dark:bg-gray-600 rounded-lg mb-3"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            </div>
        </div>
    )
}

// TestimonyCard Skeleton for Testimonials section
export const TestimonyCardSkeleton: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 animate-pulse">
            
            {/* Profile Image Section */}
            <div className="relative flex-shrink-0">
                <div className="absolute top-1/2 -translate-y-1/2 -left-10 md:-left-14 flex items-start gap-3">
                    <div className="w-8 h-24 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="w-8 h-52 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
                <div className="size-36 md:size-48 rounded-full border-4 border-gray-300 dark:border-gray-600 bg-gray-300 dark:bg-gray-600 relative z-10"></div>
            </div>

            {/* Content Section */}
            <div className="relative flex-1 flex gap-6">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded absolute -top-16 -left-5 md:-left-10"></div>
                
                <div className="w-full">
                    <div className="mb-5">
                        <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
                    </div>
                </div>

                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded absolute -bottom-8 right-0"></div>
            </div>
        </div>
    )
}

// Experience Making Beauty Section Skeleton
export const ExperienceMakingBeautySkeleton: React.FC = () => {
    return (
        <div className="container space-y-12">
            
            {/* Title Section */}
            <div className="max-w-lg mx-auto text-center space-y-4 animate-pulse">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto"></div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-lg overflow-hidden animate-pulse">
                <div className="col-span-1 flex">
                    <div className="w-full h-full aspect-7/7 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                    <div className="w-full h-full aspect-[7/2] bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                    <div className="w-full h-full aspect-[7/2] bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                    <div className="w-full h-full aspect-[7/2] bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                    <div className="w-full h-full aspect-[7/2] bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <ServiceCardSkeleton key={idx} />
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-32 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

// Recommended Services Section Skeleton
export const RecommendedServicesSkeleton: React.FC = () => {
    return (
        <div className="container space-y-12">
            
            {/* Title Section */}
            <div className="max-w-lg mx-auto text-center space-y-2 animate-pulse">
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-24 mx-auto"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-32 mx-auto"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mx-auto"></div>
            </div>

            {/* Carousel Skeleton */}
            <div className="relative animate-pulse">
                <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div key={idx} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <ServiceCardTwoSkeleton />
                        </div>
                    ))}
                </div>
                
                {/* Navigation Arrows Skeleton */}
                <div className="flex items-center justify-center gap-5 absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2">
                    <div className="size-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="size-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

// Testimonials Section Skeleton
export const TestimonialsSkeleton: React.FC = () => {
    return (
        <div className="container space-y-12">
            
            {/* Title Section */}
            <div className="max-w-lg mx-auto text-center space-y-2 animate-pulse">
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-24 mx-auto"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-48 mx-auto"></div>
            </div>

            {/* Testimonials Carousel */}
            <div className="bg-gray-300 dark:bg-gray-700 rounded-3xl min-h-[400px] py-20 px-5 overflow-hidden relative animate-pulse">
                <TestimonyCardSkeleton />
                
                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-5 absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2">
                    <div className="size-8 bg-white dark:bg-gray-600 rounded-full"></div>
                    <div className="size-8 bg-white dark:bg-gray-600 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
