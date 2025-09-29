"use client";

import React from "react";

// ================= BASE SKELETON COMPONENTS =================

interface SkeletonProps {
    className?: string;
    width?: string;
    height?: string;
}

/**
 * Base skeleton box component for rectangular shapes
 */
export const SkeletonBox: React.FC<SkeletonProps> = ({ className = "", width, height }) => (
    <div 
        className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
        style={{ width, height }}
    />
);

/**
 * Base skeleton circle component for circular shapes
 */
export const SkeletonCircle: React.FC<SkeletonProps> = ({ className = "", width = "16px", height = "16px" }) => (
    <div 
        className={`bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse ${className}`}
        style={{ width, height }}
    />
);

/**
 * Base skeleton text component for text lines
 */
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ lines = 1, className = "" }) => (
    <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, idx) => (
            <SkeletonBox 
                key={idx} 
                height="16px" 
                width={idx === lines - 1 ? "75%" : "100%"} 
            />
        ))}
    </div>
);

/**
 * Base skeleton avatar component for profile pictures
 */
export const SkeletonAvatar: React.FC<{ size?: "sm" | "md" | "lg" | "xl"; className?: string }> = ({ 
    size = "md", 
    className = "" 
}) => {
    const sizeClasses = {
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
        xl: "size-16",
    };

    return (
        <SkeletonCircle 
            className={`${sizeClasses[size]} ${className}`}
        />
    );
};

/**
 * Base skeleton button component
 */
export const SkeletonButton: React.FC<{ 
    size?: "sm" | "md" | "lg"; 
    variant?: "full" | "outline";
    className?: string;
}> = ({ size = "md", variant = "full", className = "" }) => {
    const sizeClasses = {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
    };

    const variantClasses = {
        full: "w-full",
        outline: "w-24",
    };

    return (
        <SkeletonBox 
            className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        />
    );
};

/**
 * Base skeleton card component
 */
export const SkeletonCard: React.FC<{ 
    className?: string;
    children: React.ReactNode;
}> = ({ className = "", children }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 ${className}`}>
        {children}
    </div>
);
