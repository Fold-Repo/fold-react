"use client";

import React from "react";
import { cn } from "@/lib";

const gridOptions = [
    { value: "1", alt: "Grid One", icon: "/icon/grid_1.svg", iconActive: "/icon/grid_1.svg" },
    { value: "2", alt: "Grid Two", icon: "/icon/grid_2.svg", iconActive: "/icon/grid_2.svg" },
    { value: "3", alt: "Grid Three", icon: "/icon/grid_3.svg", iconActive: "/icon/grid_3.svg", visibility: "md" },
    { value: "4", alt: "Grid Four", icon: "/icon/grid_4.svg", iconActive: "/icon/grid_4.svg", visibility: "xl" },
];

type GridSwitcherProps = {
    label?: string;
    selected: string;
    onSelect: (value: string) => void;
    className?: string;
};

const GridSwitcher: React.FC<GridSwitcherProps> = ({
    label = "View:",
    selected,
    onSelect,
    className,
}) => {
    return (
        <div className={cn("inline-flex items-center gap-x-3", className)}>
            {/* ================= GRID LABEL ================= */}
            {label && (
                <span className="text-gray-500 text-sm">
                    {label}
                </span>
            )}

            {/* ================= GRID OPTIONS ================= */}
            <div className="inline-flex items-center gap-1">
                {gridOptions.map(({ value, icon, iconActive, alt, visibility }) => (
                    <button
                        key={value}
                        onClick={() => onSelect(value)}
                        className={cn(
                            "bg-transparent p-1.5 rounded flex items-center justify-center",
                            selected === value && "bg-brand",
                            visibility === "md" && "hidden md:flex",
                            visibility === "xl" && "hidden xl:flex",
                            "focus:outline-none cursor-pointer"
                        )}>
                        <img
                            src={selected === value ? iconActive : icon}
                            alt={alt}
                            className={cn(
                                "h-3.5",
                                selected === value && "filter brightness-1 invert"
                            )}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GridSwitcher;
