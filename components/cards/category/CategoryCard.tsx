"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CategoryType } from "@/types"

interface CategoryCardProps {
    category: CategoryType
    className?: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = "" }) => {
    return (
        <Link href={category.href} className={`block bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300 ${className}`}>
            
            <div className={`${category.backgroundColor} aspect-9/8 rounded-xl overflow-hidden`}>
                <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={267}
                    className="w-full h-full object-contain object-center"
                />
            </div>
            
            <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {category.name}
                </h3>
            </div>
            
        </Link>
    )
}

export { CategoryCard }
