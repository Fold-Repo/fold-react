"use client"

import { useQueryParams } from "@/hooks";
import { useGetPostMetas } from "@/service";
import { PostCategories } from "@/types";
import { CategoryListSkeleton } from "@/components/skeleton";
import React, { useEffect, useState } from "react"

const BlogCategories = () => {

    const { response, isLoading } = useGetPostMetas();
    const { categories = [] } = response || {};

    const { searchParams, updateQueryParams } = useQueryParams();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const catParam = searchParams.get("category");
        setSelectedCategory(catParam || null);
    }, [searchParams]);

    const toggleCategory = (category: string) => {
        const newCategory = selectedCategory === category ? null : category;
        setSelectedCategory(newCategory);
        updateQueryParams({ category: newCategory || null });
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-5">

            <h2 className="text-left text-base font-semibold">Categories</h2>

            <div className="divide-y divide-gray-300 dark:divide-gray-600">

                {/* ==== CATEGORY ===== */}
                {isLoading ? (
                    <CategoryListSkeleton count={5} />
                ) : (
                    categories.map((category: PostCategories, index: number) => (
                        <button type='button' key={index} className="w-full  cursor-pointer 
                            flex items-center justify-between py-3"  
                            onClick={() => toggleCategory(category.name.toLowerCase())}>

                            <span className="text-sm font-medium text-black dark:text-gray-400">
                                { category.name }
                            </span>

                            <div className="flex items-center justify-center text-[12px] font-medium text-black dark:text-gray-200
                            bg-gray-100 dark:bg-gray-600 size-7 p-0.5 rounded-full">
                                {  category.count}
                            </div>

                        </button>
                    ))
                )}

            </div>

        </div>
    )
}

export default BlogCategories
