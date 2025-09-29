"use client";

import React from "react";
import { RETURN_POLICY_CONTENT } from "@/constants";

const ReturnPolicy: React.FC = () => {
    return (
        <div className="w-full">
            <div className="text-gray-800 dark:text-gray-200 leading-relaxed">

                {/* ================= INTRODUCTION ================= */}
                <div className="pb-6">
                    <h1 className="font-semibold pb-3 text-base text-black dark:text-white">
                        {RETURN_POLICY_CONTENT.title}
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {RETURN_POLICY_CONTENT.introduction}
                    </p>
                </div>

                {/* ================= POLICY SECTIONS ================= */}
                {RETURN_POLICY_CONTENT.sections.map((section, index) => (
                    <div key={index} className={index === RETURN_POLICY_CONTENT.sections.length - 1 ? "pb-0" : "pb-6"}>
                        <h1 className="font-semibold pb-3 text-base text-black dark:text-white">
                            {section.title}
                        </h1>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {item.includes("{email}") ? (
                                        <>
                                            Contact our Customer Support team at{" "}
                                            <a href={`mailto:${RETURN_POLICY_CONTENT.supportEmail}`} 
                                                className="text-blue-600 dark:text-blue-400 underline">
                                                {RETURN_POLICY_CONTENT.supportEmail}
                                            </a>
                                            {" "}with your order number and reason for return.
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

export default ReturnPolicy;
