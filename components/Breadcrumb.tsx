import { cn } from "@/lib";
import React from "react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
    isActive?: boolean;
}

type BreadcrumbVariant = "left" | "center";

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    variant?: BreadcrumbVariant;
    className?: string;
    separator?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    variant = "left",
    className,
    separator = <i className="ri-arrow-right-s-line text-gray-600 dark:text-gray-400 text-lg"></i>
}) => {
    const alignmentClasses: Record<BreadcrumbVariant, string> = {
        left: "justify-left",
        center: "justify-center"
    };

    return (
        <div className={cn(
            "bg-gray-200/80 dark:bg-gray-800 py-8 md:py-12",
            className
        )}>
            <nav className={cn(
                "container flex min-w-0 items-center gap-2 text-sm/6 whitespace-nowrap",
                alignmentClasses[variant]
            )}>
                {items.map((item, index) => (
                    <div key={index} className="group flex items-center gap-2">
                        {index > 0 && separator}
                        
                        {item.href ? (
                            <a
                                href={item.href}
                                className={cn(
                                    "font-medium",
                                    item.isActive
                                        ? "text-gray-500 dark:text-gray-400"
                                        : "text-brand dark:text-blue-500"
                                )}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span
                                className={cn(
                                    "font-medium",
                                    item.isActive
                                        ? "text-gray-500 dark:text-gray-400"
                                        : "text-brand dark:text-blue-500"
                                )}
                            >
                                {item.label}
                            </span>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Breadcrumb;
export type { BreadcrumbProps, BreadcrumbVariant };
