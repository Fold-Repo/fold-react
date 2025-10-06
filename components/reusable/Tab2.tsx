"use client"

import React from "react"
import { cn } from "@/lib"

export interface Tab2Item {
    id: string
    label: string
}

interface Tab2Props {
    items: Tab2Item[]
    activeId: string
    onTabChange: (id: string) => void
    className?: string
}

const Tab2: React.FC<Tab2Props> = ({
    items,
    activeId,
    onTabChange,
    className
}) => {
    return (
        <div className={cn("flex items-center gap-6 border-b border-gray-200 dark:border-stone-700 text-sm font-normal", className)}>
            {items.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={cn(
                        "cursor-pointer border-b-2 transition-colors duration-200",
                        activeId === item.id
                            ? "font-semibold text-blue-600 border-blue-600"
                            : "text-gray-600 dark:text-stone-400 border-transparent font-normal hover:text-gray-900 dark:hover:text-stone-300"
                    )}
                >
                    {item.label}
                </button>
            ))}
        </div>
    )
}

export default Tab2
