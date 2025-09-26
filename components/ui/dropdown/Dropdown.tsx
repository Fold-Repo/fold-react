"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
    color?: string; 
    image?: string; 
    icon?: React.ReactNode; 
    customContent?: React.ReactNode; 
    dataAttributes?: Record<string, string>;
}

type DropdownVariant = "default" | "outline" | "ghost";

interface DropdownProps {
    options: DropdownOption[];
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    label?: string;
    variant?: DropdownVariant;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string, option: DropdownOption) => void;
    onOpen?: () => void;
    onClose?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    defaultValue,
    placeholder = "Select",
    variant = "default",
    disabled = false,
    className,
    onChange,
    onOpen,
    onClose,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || "");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    useClickOutside(dropdownRef, () => {
        setIsOpen(false);
        onClose?.();
    });

    const handleToggle = () => {
        if (disabled) return;
        
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        
        if (newIsOpen) {
            onOpen?.();
        } else {
            onClose?.();
        }
    };

    const handleOptionClick = (option: DropdownOption) => {
        if (option.disabled) return;
        
        setSelectedValue(option.value);
        setIsOpen(false);
        onChange?.(option.value, option);
        onClose?.();
    };

    const getSelectedLabel = () => {
        if (selectedValue) {
            const selectedOption = options.find(option => option.value === selectedValue);
            if (selectedOption) {
                return (
                    <span className="flex items-center gap-2">
                        {selectedOption.color && (
                            <div 
                                className={cn(
                                    "size-4 rounded-full",
                                    selectedOption.color.startsWith("#") || selectedOption.color.startsWith("rgb") 
                                        ? "" 
                                        : `bg-${selectedOption.color}`
                                )}
                                style={selectedOption.color.startsWith("#") || selectedOption.color.startsWith("rgb") 
                                    ? { backgroundColor: selectedOption.color } 
                                    : undefined
                                }
                            />
                        )}
                        {selectedOption.icon && selectedOption.icon}
                        {selectedOption.image && (
                            <img 
                                src={selectedOption.image} 
                                alt={selectedOption.label}
                                className="size-4 rounded object-cover"
                            />
                        )}
                        <span>{selectedOption.label}</span>
                    </span>
                );
            }
        }
        return placeholder;
    };

    const variantClasses: Record<DropdownVariant, string> = {
        default: "border-gray-300 bg-white dark:bg-gray-800",
        outline: "border-gray-300 bg-transparent",
        ghost: "border-transparent bg-transparent"
    };

    return (
        <div ref={dropdownRef}
            className={cn("relative", className)}>

            {/* ================= DROPDOWN BUTTON ================= */}
            <button type="button" onClick={handleToggle}
                disabled={disabled} className={cn(
                    "cursor-pointer dropdown-toggle text-xs flex items-center justify-between",
                    "border px-3 py-2.5 gap-x-2 rounded-lg w-full",
                    "transition-colors duration-200",
                    variantClasses[variant],
                    disabled && "opacity-50 cursor-not-allowed",
                    isOpen && "border-brand"
                )}>
                <span className="dropdown-label flex items-center gap-2">
                    {getSelectedLabel()}
                </span>
                <ChevronDownIcon  className={cn(
                        "size-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {/* ================= DROPDOWN MENU ================= */}
            <div className={cn(
                    "!z-30 text-xs dropdown-menu absolute left-0 top-full rounded-lg w-full min-w-[120px] p-2",
                    "bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700",
                    "transition-all duration-200",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}>

                <ul className='space-y-0.5'>
                    {options.map((option) => (
                        <li key={option.value} onClick={() => handleOptionClick(option)}
                            className={cn(
                                "flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                                "transition-colors duration-150",
                                option.disabled && "opacity-50 cursor-not-allowed",
                                selectedValue === option.value && "bg-gray-100 dark:bg-gray-700"
                            )}
                            {...(option.dataAttributes || {})}>

                            {option.customContent ? (
                                option.customContent
                            ) : (
                                <>
                                    {option.color && (
                                        <div className={cn(
                                                "size-4 rounded-full",
                                                option.color.startsWith("#") || option.color.startsWith("rgb") 
                                                    ? "" 
                                                    : `bg-${option.color}`
                                            )}
                                            style={option.color.startsWith("#") || option.color.startsWith("rgb") 
                                                ? { backgroundColor: option.color } 
                                                : undefined
                                            }
                                        />
                                    )}
                                    {option.icon && option.icon}
                                    {option.image && (
                                        <img 
                                            src={option.image} 
                                            alt={option.label}
                                            className="size-5 rounded object-cover"
                                        />
                                    )}
                                    <span>{option.label}</span>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export { Dropdown };
export type { DropdownProps, DropdownVariant };
