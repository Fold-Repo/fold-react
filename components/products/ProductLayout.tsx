"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProductLayoutProps {
    left: ReactNode;
    right: ReactNode;
    reversed?: boolean;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ left, right, reversed = false }) => {


    const leftOrder = reversed ? "order-1 lg:order-2" : "order-1 lg:order-1";
    const rightOrder = reversed ? "order-2 lg:order-1" : "order-2 lg:order-2";
    const leftAnimation = reversed ? { x: 30 } : { x: -30 };
    const rightAnimation = reversed ? { x: -30 } : { x: 30 };

    return (
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-10 relative">

            {/* ================= LEFT SIDEBAR ================= */}
            <motion.div
                initial={{ opacity: 0, ...leftAnimation }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`${leftOrder} w-full lg:w-[30%] 2xl:w-[25%] space-y-8 lg:pt-3`}>
                <div className="sticky top-6">
                    {left}
                </div>
            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
                initial={{ opacity: 0, ...rightAnimation }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${rightOrder} w-full lg:w-[70%] 2xl:w-[75%] space-y-8`}>
                {right}
            </motion.div>

        </div>
    );
};

export default ProductLayout;
