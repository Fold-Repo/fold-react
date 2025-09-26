"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib";
import { Dropdown } from "@/components/ui/dropdown";

export interface ColorSwatchOption {
    color: string;
    image: string;
    ring?: string;
    active?: string;
    label?: string;
}

interface ColorSwatchProps {
    options: ColorSwatchOption[];
    trigger?: "click" | "hover" | "both";
    onColorChange?: (option: ColorSwatchOption) => void;
    className?: string;
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    label?: string;
    variant?: "circle" | "label" | "dropdown";
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
    options,
    trigger = "hover",
    onColorChange,
    className,
    size = "md",
    showLabel = true,
    label = "Color:",
    variant = "circle"
}) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const sizeClasses = {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
    };

    const handleColorChange = (option: ColorSwatchOption, index: number) => {
        setActiveIndex(index);
        onColorChange?.(option);
    };

    const handleMouseEnter = (option: ColorSwatchOption, index: number) => {
        if (trigger === "hover" || trigger === "both") {
            handleColorChange(option, index);
        }
    };

    const handleClick = (option: ColorSwatchOption, index: number) => {
        if (trigger === "click" || trigger === "both") {
            handleColorChange(option, index);
        }
    };

    // Circle variant (original)
    if (variant === "circle") {
        return (
            <div className={cn("flex items-center gap-3 text-xs font-medium text-gray-800 dark:text-gray-200", className)}>
                {showLabel && <span>{label}</span>}

                <div className="flex gap-2" ref={containerRef}>
                    {options.map((option, index) => (
                        <span key={index} className={cn(
                                "rounded-full cursor-pointer transition-all duration-200 border border-gray-300 dark:border-gray-600",
                                sizeClasses[size],
                                activeIndex === index && "ring ring-offset-1",
                                activeIndex === index && option.active && option.active
                            )}
                            style={{
                                backgroundColor: option.color,
                                ...(activeIndex === index && option.ring && {
                                    "--tw-ring-color": option.ring
                                } as React.CSSProperties)
                            }}
                            onMouseEnter={() => handleMouseEnter(option, index)}
                            onClick={() => handleClick(option, index)}
                            title={option.label || option.color}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // Label variant (with color circle + text)
    if (variant === "label") {
        return (
            <div className={cn("flex items-center gap-4 text-sm text-gray-900 dark:text-gray-200", className)}>
                {showLabel && <span className="font-semibold">{label}</span>}

                <div className="flex items-center flex-wrap gap-2" ref={containerRef}>
                    {options.map((option, index) => (
                        <div key={index} className={cn(
                                "py-1 px-2 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-200",
                                activeIndex === index && "bg-white dark:bg-gray-800 border border-gray-500 dark:border-gray-800"
                            )}  onMouseEnter={() => handleMouseEnter(option, index)} onClick={() => handleClick(option, index)}>
                            <span className="size-4 rounded-full border border-gray-300 dark:border-gray-600"
                                style={{ backgroundColor: option.color }} />
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        );
    }

    if (variant === "dropdown") {
        const dropdownOptions = options.map((option) => ({
            value: option.color,
            label: option.label || option.color,
            color: option.color,
        }));

        const selectedOption = options[activeIndex];
        const selectedValue = selectedOption ? selectedOption.color : "";

        const handleDropdownChange = (value: string) => {
            const optionIndex = options.findIndex(option => option.color === value);
            if (optionIndex !== -1) {
                handleColorChange(options[optionIndex], optionIndex);
            }
        };

        return (
            <div className={cn("flex items-center gap-3 text-xs font-medium text-gray-800 dark:text-gray-200", className)}>

                {showLabel && <span>{label}</span>}

                <Dropdown
                    options={dropdownOptions}
                    value={selectedValue}
                    placeholder="Select Color"
                    variant="outline"
                    className="min-w-full"
                    onChange={handleDropdownChange}
                />

            </div>
        );
    }

    return null;
};

export default ColorSwatch;
