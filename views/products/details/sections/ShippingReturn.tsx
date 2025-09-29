"use client";

import React from "react";
import { SHIPPING_RETURN_CONTENT } from "@/constants";

const ShippingReturn: React.FC = () => {
    return (
        <div className="w-full">
            <div className="text-gray-800 dark:text-gray-200 leading-relaxed">

                {/* ================= SHIPPING SECTIONS ================= */}
                {SHIPPING_RETURN_CONTENT.sections.map((section, index) => (
                    <div key={index} className={index === SHIPPING_RETURN_CONTENT.sections.length - 1 ? "" : "pb-6"}>
                        <h1 className="font-semibold pb-3 text-base text-black dark:text-white">
                            {section.title}
                        </h1>
                        <ul className="list-disc text-sm pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {item.includes("{email}") ? (
                                        <>
                                            For any questions, please contact us at{" "}
                                            <a 
                                                href={`mailto:${SHIPPING_RETURN_CONTENT.supportEmail}`} 
                                                className="text-blue-600 dark:text-blue-400 underline"
                                            >
                                                {SHIPPING_RETURN_CONTENT.supportEmail}
                                            </a>.
                                        </>
                                    ) : (
                                        item
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ShippingReturn;
