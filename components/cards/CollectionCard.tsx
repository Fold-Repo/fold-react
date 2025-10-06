"use client"

import React from "react"
import { cn } from "@/lib"
import { CollectionType } from "@/types"

interface CollectionCardProps {
    collection: CollectionType
    className?: string
    size?: "small" | "medium" | "large"
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, className = "", size = "medium" }) => {
    const { name, description, image } = collection
    
    const sizeClasses = {
        small: "aspect-[9/6]",
        medium: "aspect-[9/6]",
        large: "h-56 md:h-auto"
    }
    
    const textSizeClasses = {
        small: "text-sm",
        medium: "text-base", 
        large: "text-xl"
    }
    
    const paddingClasses = {
        small: "bottom-2 left-2 right-2",
        medium: "bottom-3 left-3 right-3",
        large: "bottom-5 left-5 right-5"
    }

    return (
        <div className={cn("relative w-full rounded-xl overflow-hidden", sizeClasses[size], className)}>

            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />

            <div className="absolute inset-0 bg-black/30" />

            <div className={cn("absolute space-y-3 z-10", paddingClasses[size])}>

                <h3 className={cn("text-white font-semibold", textSizeClasses[size])}>
                    {name}
                </h3>

                <div className="bg-black/30 backdrop-blur-md rounded-tl-md rounded-br-md p-3">
                    <p className={cn(
                        "text-gray-100 font-light dark:text-gray-200 leading-relaxed",
                        size === "large" ? "text-[12px] lg:text-xs" : "text-[12px]"
                    )}>
                        {description}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default CollectionCard
