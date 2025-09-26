import React from "react";
import { cn } from "@/lib";

type ResponsiveGridProps = {
    columns: string; 
    children?: React.ReactNode;
    className?: string;
    lastItemColSpan?: boolean; 
};

const gridClassMap: Record<string, string> = {
    "1": "grid-cols-1 gap-2 w-full",
    "2": "grid-cols-2 gap-2 w-full",
    "3": "grid-cols-2 md:grid-cols-3 gap-2 w-full",
    "4": "grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 w-full",
    "5": "grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 w-full",
    "6": "grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 w-full",
};

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
    columns, 
    children, 
    className, 
    lastItemColSpan = false 
}) => {
    
    const gridClass = gridClassMap[columns] || gridClassMap["4"];

    const childrenArray = React.Children.toArray(children);

    return (
        <div className={cn("grid", gridClass, className)}>
            {/* ================= GRID ITEMS ================= */}
            {childrenArray.map((child, index) => {
                const isLastItem = index === childrenArray.length - 1;
                
                if (isLastItem && lastItemColSpan) {
                    return (
                        <div key={index} className="col-span-1">
                            {child}
                        </div>
                    );
                }
                
                return child;
            })}
        </div>
    );
};

export default ResponsiveGrid;
