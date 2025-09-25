"use client";

import Image from "next/image";
import React from "react";

// ================== Props Interface ==================
interface SocialLoginButtonProps {
    /** Path to logo (local or remote).
     *  Example: "/img/icon/google.svg"
     */
    logo: string;

    /** Alternative text for the logo image (for accessibility). */
    alt: string;

    /** Button label text.
     *  Example: "Log in with Google"
     */
    text: string;

    /** Function to run when button is clicked.
     *  Example: () => signIn("google")
     */
    onClick?: () => void;

    className?: string;
}

export default function SocialLoginButton({
    logo,
    alt,
    text,
    onClick,
    className = "",
}: SocialLoginButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`btn btn-light h-12 bg-white !text-neutral-700 dark:!text-gray-300 ${className}`}>

            <Image src={logo} alt={alt} width={24} height={24} className="w-6 h-6 object-contain" />

            <span>{text}</span>

        </button>
    );
}
