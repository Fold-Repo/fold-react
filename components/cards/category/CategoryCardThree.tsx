"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CategoryType } from "@/types"

interface CategoryCardThreeProps {
    category: CategoryType
    className?: string
}

const CategoryCardThree: React.FC<CategoryCardThreeProps> = ({ category, className = "" }) => {
    return (
        <Link href={category.href} className={`block ${className}`}>
            <div className="relative flex items-center justify-center overflow-hidden">
                
                <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="rounded-full object-cover aspect-square"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-3 py-1.5 bg-white/70 dark:bg-gray-800/70 w-full text-center">
                        <p className="text-xs font-medium text-gray-900 dark:text-white">
                            {category.name}
                        </p>
                    </div>
                </div>
                
            </div>
        </Link>
    )
}

export { CategoryCardThree }
