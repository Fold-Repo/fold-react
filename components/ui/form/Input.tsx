"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    name: string;
    className?: string;
    formGroupClass?: string;
    labelClassName?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    fullWidth?: boolean;
    inputSize?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
    error?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    isCurrency?: boolean;
    type?: string
}

const sizeClasses: Record<string, string> = {
    sm: "h-10",
    md: "h-11",
    lg: "h-12",
};

const radiusClasses: Record<string, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
};

const formatCurrency = (value: string) => {
    const number = parseFloat(value.replace(/,/g, ""));
    if (isNaN(number)) return "";
    return number.toLocaleString();
};

const unformatCurrency = (value: string) => {
    return value.replace(/,/g, "");
};

const Input: React.FC<InputProps> = ({
    label,
    name,
    className,
    formGroupClass,
    labelClassName,
    startContent,
    endContent,
    fullWidth,
    inputSize = "md",
    radius = "md",
    error,
    value,
    onChange,
    onBlur,
    isCurrency = false,
    type = "text",
    ...props
}) => {
    const [displayValue, setDisplayValue] = useState(() => {
        if (isCurrency && value) {
            return formatCurrency(String(value));
        }
        return value ?? "";
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rawValue = e.target.value;

        if (isCurrency) {
            rawValue = unformatCurrency(rawValue);
            const formattedValue = formatCurrency(rawValue);

            const syntheticEvent = {
                ...e,
                target: {
                    ...e.target,
                    value: rawValue,
                    name: name
                }
            };

            onChange?.(syntheticEvent);
            setDisplayValue(formattedValue);
        } else {
            onChange?.(e);
        }
    };

    const inputValue = isCurrency ? displayValue : value;

    return (
        <div className={cn("form-group", formGroupClass, fullWidth && "w-full")}>
            {label && <Label htmlFor={name} label={label} className={labelClassName} />}

            <div className="relative w-full">
                {startContent && (
                    <div className="absolute left-3 inset-y-0 flex items-center">
                        {startContent}
                    </div>
                )}

                <input
                    {...props}
                    type={type}
                    id={name}
                    name={name}
                    value={type !== "file" ? inputValue : undefined}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className={cn(
                        "form-control",
                        sizeClasses[inputSize],
                        radiusClasses[radius],
                        startContent ? "pl-9" : "",
                        endContent ? "pr-9" : "",
                        error && "is-invalid",
                        className
                    )}
                />

                {/* Custom File Upload Button */}
                {type === "file" && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <button
                            type="button"
                            className="flex items-center gap-1 px-3 py-2 text-xs hover:bg-black bg-primary text-white rounded-full cursor-pointer"
                            onClick={() => document.getElementById(name)?.click()}>
                            Upload
                            <ArrowUpTrayIcon className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {type !== "file" && endContent && (
                    <div className="absolute right-3 inset-y-0 flex items-center">{endContent}</div>
                )}

            </div>

            <ErrorMessage error={error} />
        </div>
    );
};

export default Input;