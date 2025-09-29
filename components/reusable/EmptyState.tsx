"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

type EmptyStateProps = {
    imageSrc?: string;
    title: string;
    description?: string;
    actionLabel?: string;
    actionHref?: string;
    onActionClick?: () => void;
    center?: boolean;
};

const EmptyState: React.FC<EmptyStateProps> = ({
    imageSrc = "/img/empty.svg",
    title,
    description,
    actionLabel,
    actionHref,
    onActionClick,
    center = true,
}) => {
    const ActionButton = () => {
        if (!actionLabel) return null;

        const buttonElement = (
            <Button size="md" rounded="full" className="w-full px-12 bg-brand text-white"
                onClick={onActionClick}>
                {actionLabel}
            </Button>
        );

        if (actionHref && !onActionClick) {
            return (
                <Link href={actionHref} className="flex justify-center pt-5">
                    {buttonElement}
                </Link>
            );
        }

        return (
            <div className="flex justify-center pt-5">
                {buttonElement}
            </div>
        );
    };

    return (

        <div className={center ? "max-w-md m-auto text-center" : ""}>

            <Image width={500} height={500} src={imageSrc} alt="Empty state" className="size-28 m-auto" priority={true} />

            <div className="space-y-2 mt-6">
                
                <h2 className="text-lg lg:text-xl font-semibold text-black dark:text-white">
                    {title}
                </h2>

                {description && (
                    <p className="text-sm text-black/50 dark:text-gray-400">
                        {description}
                    </p>
                )}

                <ActionButton />

            </div>

        </div>
    );
};

export default EmptyState;
