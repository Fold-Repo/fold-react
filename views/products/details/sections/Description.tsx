"use client";

import React from "react";
import { ProductType } from "@/types";

interface DescriptionProps {
    product: ProductType;
}

const Description: React.FC<DescriptionProps> = ({ product }) => {
    return (
        <div className="w-full ">

            <div className="text-gray-800 dark:text-gray-400">

                <div className="pb-5">
                    <h1 className="font-semibold text-base text-gray-900 dark:text-gray-300 pb-3">{product.name}:</h1>
                    <div  className="text-sm leading-7"
                        dangerouslySetInnerHTML={{ __html: product.description || "" }}
                    />
                </div>


            </div>

        </div>
    );
};

export default Description;
