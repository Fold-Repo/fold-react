import { cn } from "@/lib";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import Spinner from "../../Spinner";

type ButtonVariant =
    | "primary"
    | "accent"
    | "brand"
    | "light"
    | "outline"
    | "ghost"
    | "outline-brand"
    | "success"
    | "warning"
    | "danger";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            variant = "brand",
            size = "md",
            loading = false,
            disabled = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            rounded = "md",
            type = "button",
            ...props
        },
        ref
    ) => {

        const sizeClasses: Record<ButtonSize, string> = {
            xs: "px-3 h-9 text-xs",
            sm: "px-3 py-1.5 text-xs",
            md: "px-4 py-2.5 text-xs",
            lg: "px-6 py-3 text-xs",
            xl: "px-8 py-3.5 text-sm",
        };

        const roundedClasses: Record<NonNullable<ButtonProps["rounded"]>, string> = {
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        };

        return (
            <button
                ref={ref}
                type={type}
                className={cn(
                    "btn",
                    `btn-${variant}`, 
                    sizeClasses[size],
                    roundedClasses[rounded],
                    fullWidth && "w-full",
                    className
                )}
                disabled={loading || disabled}
                {...props}>
                {loading ? (
                    <Spinner size={14} />
                ) : (
                    <>
                        {leftIcon && <span className="mr-2">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="ml-2">{rightIcon}</span>}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
