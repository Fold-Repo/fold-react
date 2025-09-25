import React from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size: string | number;
    color?: string;
    dark?: boolean;
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color = "", dark = false, className = "", ...rest }) => {
    const spinnerClasses = `animate-spin inline-block border-[2px] border-current border-t-transparent rounded-full ${color} ${dark ? "dark:" : ""} ${className}`;

    return (
        <div
            className={spinnerClasses}
            style={{ width: size, height: size }}
            role="status"
            aria-label="loading"
            {...rest}>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;
