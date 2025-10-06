"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CategoryType } from "@/types"

interface CategoryCardTwoProps {
    category: CategoryType
    className?: string
}

const CategoryCardTwo: React.FC<CategoryCardTwoProps> = ({ category, className = "" }) => {
    return (
        <Link href={category.href} className={`block ${className}`}>
            <div className="py-5 relative bg-white dark:bg-gray-800 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] flex items-center justify-center overflow-hidden">
                
                <div className="relative">
                    
                    <Image
                        src={category.image}
                        alt={category.name}
                        width={112}
                        height={112}
                        className="size-28 rounded-full object-cover"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-3 py-1.5 bg-white/70 dark:bg-gray-800/70 w-full text-center">
                            <p className="text-xs font-medium text-gray-900 dark:text-white">
                                {category.name}
                            </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </Link>
    )
}

export { CategoryCardTwo }
