"use client";

import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib";
import { SpecificationType } from "@/types";

interface ProductSpecificationsProps {
    specifications?: SpecificationType[];
    className?: string;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ specifications, className = "" }) => {

    const defaultSpecifications: SpecificationType[] = [
        {
            title: "Key Features",
            features: [
                "25,500 DPI Precision sensor",
                "Wireless 2.4GHz & Bluetooth connectivity",
                "80-hour battery life",
                "Customizable RGB lighting",
                "7 programmable buttons",
                "Ultra-lightweight 65g design"
            ]
        },
        {
            title: "Performance",
            items: [
                { label: "DPI Range", value: "100 - 25,600" },
                { label: "Polling Rate", value: "1000 Hz" },
                { label: "Acceleration", value: "50G" },
                { label: "Max Speed", value: "650 IPS" }
            ]
        },
        {
            title: "Design",
            items: [
                { label: "Weight", value: "65g" },
                { label: "Dimensions", value: "125 x 67 x 42mm" },
                { label: "Buttons", value: "7 programmable" },
                { label: "Battery Life", value: "80 hours" }
            ]
        }
    ];

    const specs = specifications || defaultSpecifications;

    if (specs.length < 1) {
        return null;
    }

    return (
        <div className={cn("space-y-6", className)}>

            <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-300">
                Specifications
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {specs.map((spec, index) => (
                    <div key={index} className="border border-gray-300 dark:border-gray-200 p-4 rounded-lg space-y-5">
                        <h2 className="text-center text-sm text-gray-900 dark:text-gray-300">
                            {spec.title}
                        </h2>

                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            {spec.features ? (
                                <div className="flex flex-col gap-y-4">
                                    {spec.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="inline-flex items-center gap-2 text-gray-500 text-xs">
                                            <CheckIcon className="size-5 text-green-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col gap-y-5">
                                    {spec.items?.map((item, itemIndex) => (
                                        <div key={itemIndex} className="inline-flex items-center justify-between gap-2 text-gray-500 text-xs">
                                            <span>{item.label}</span>
                                            <span>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSpecifications;
