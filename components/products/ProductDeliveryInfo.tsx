"use client";

import React from "react";
import { TruckIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

interface ProductDeliveryInfoProps {
    isFreeDelivery?: boolean;
    deliveryDate?: string;
}

const ProductDeliveryInfo: React.FC<ProductDeliveryInfoProps> = ({ 
    isFreeDelivery = true,
    deliveryDate = "Monday, 27th May",
}) => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="inline-flex items-center gap-3 text-gray-500 dark:text-gray-200">
                <TruckIcon className="w-5 h-5" />
                <span className="text-sm">
                    {isFreeDelivery ? "Free Delivery" : "Delivery"} by {deliveryDate}
                </span>
            </div>

            <div className="inline-flex items-center gap-3 text-gray-500 dark:text-gray-200">
                <ArrowPathIcon className="w-5 h-5" />
                <span className="text-sm">Easy 15-day returns</span>
            </div>
        </div>
    );
};

export default ProductDeliveryInfo;
