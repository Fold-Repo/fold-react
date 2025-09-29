"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

interface AccordionProps {
    children: React.ReactNode;
    exclusive?: boolean;
    className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    defaultOpen = false,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
            } else {
                contentRef.current.style.maxHeight = "0px";
            }
        }
    }, [isOpen]);

    return (
        <div className={cn("py-3", className)}>
            {/* ================= ACCORDION TOGGLE ================= */}
            <button type="button"
                onClick={toggleAccordion} className="cursor-pointer w-full flex items-center justify-between font-medium text-left text-gray-600 text-sm">
                <span>{title}</span>
                <ChevronDownIcon 
                    className={cn(
                        "size-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {/* ================= ACCORDION CONTENT ================= */}
            <div  ref={contentRef}
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    isOpen ? "max-h-screen opacity-100 mt-3" : "max-h-0 opacity-0"
                )}>
                <div className="py-4 px-1 space-y-3">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({
    children,
    exclusive = false,
    className,
}) => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const handleItemToggle = (index: number, isOpen: boolean) => {
        if (exclusive && isOpen) {
            
            setOpenItems(new Set([index]));
        } else {
            setOpenItems(prev => {
                const newSet = new Set(prev);
                if (isOpen) {
                    newSet.add(index);
                } else {
                    newSet.delete(index);
                }
                return newSet;
            });
        }
    };

    return (
        <div className={cn("divide-y divide-gray-200 dark:divide-gray-600", className)}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child) && child.type === AccordionItem) {
                    return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
                        key: index,
                        ...(child.props || {}),
                        // @ts-expect-error: isOpen and onToggle are expected by AccordionItem but not in React's type
                        isOpen: openItems.has(index),
                        onToggle: (isOpen: boolean) => handleItemToggle(index, isOpen),
                    });
                }
                return child;
            })}
        </div>
    );
};

export { Accordion, AccordionItem };
export default Accordion;
