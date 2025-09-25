"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BlogLayoutProps {
    left: ReactNode;
    right: ReactNode;
    reversed?: boolean;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ left, right, reversed = false }) => {
    const leftOrder = reversed ? "order-1 lg:order-2" : "order-2 lg:order-1";
    const rightOrder = reversed ? "order-2 lg:order-1" : "order-1 lg:order-2";
    const leftAnimation = reversed ? { x: 30 } : { x: -30 };
    const rightAnimation = reversed ? { x: -30 } : { x: 30 };

    return (
        <div className="flex flex-col lg:flex-row gap-5">

            <motion.div
                initial={{ opacity: 0, ...leftAnimation }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`${leftOrder} w-full lg:w-[70%] space-y-8`}>
                {left}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, ...rightAnimation }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${rightOrder} w-full lg:w-[30%] lg:pt-10`}>
                <div className="space-y-5 sticky top-6">
                    {right}
                </div>
            </motion.div>
            
        </div>
    );
};

export default BlogLayout;
