"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "@/lib";

export interface TabItem {
    id: string;
    label: string;
    href?: string;
    content?: ReactNode;
}

interface TabProps {
    items: TabItem[];
    defaultActiveId?: string;
    variant?: "default" | "pills" | "underline";
    className?: string;
    onTabChange?: (activeId: string) => void;
}

const Tab: React.FC<TabProps> = ({
    items,
    defaultActiveId,
    variant = "default",
    className,
    onTabChange
}) => {
    const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id || "");

    const handleTabClick = (id: string) => {
        setActiveId(id);
        onTabChange?.(id);
    };

    const getTabStyles = (isActive: boolean) => {
        switch (variant) {
            case "pills":
                return cn(
                    "cursor-pointer px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    isActive
                        ? "bg-brand text-white"
                        : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                );
            case "underline":
                return cn(
                    "cursor-pointer px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-200",
                    isActive
                        ? "border-brand text-brand"
                        : "border-transparent text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                );
            default:
                return cn(
                    "cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                        ? "bg-brand text-white rounded-lg"
                        : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                );
        }
    };

    const activeTab = items.find(item => item.id === activeId);

    return (
        <div className={cn("w-full", className)}>

            <div className="w-full mb-8 overflow-x-auto">
                <div className="flex items-center justify-start sm:justify-center gap-x-6 sm:gap-x-8 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={getTabStyles(item.id === activeId)}>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            {activeTab?.content && (
                <div className="w-full">
                    {activeTab.content}
                </div>
            )}
        </div>
    );
};

export default Tab;
