"use client"

import React from "react"
import { cn } from "@/lib"

interface SectionTitleProps {
    title: string
    className?: string
    titleClassName?: string
    underlineClassName?: string
    underlineColor?: string
    underlineWidth?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    className = "",
    titleClassName = "",
    underlineClassName = "",
    underlineColor = "bg-blue-600",
    underlineWidth = "w-20"
}) => {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <h2 className={cn("text-gray-900 dark:text-gray-100 text-lg font-semibold", titleClassName)}>
                {title}
            </h2>
            <div className={cn("h-0.5 rounded", underlineWidth, underlineColor, underlineClassName)}></div>
        </div>
    )
}

export default SectionTitle
