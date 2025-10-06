"use client"

import React from "react"
import Image from "next/image"
import { Review } from "@/types"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

interface TestimonyCardProps {
    testimony: Review
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ testimony }) => {
    return (
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            
            <div className="relative flex-shrink-0">
                
                <div className="absolute top-1/2 -translate-y-1/2 -left-10 md:-left-14 flex items-start gap-3">
                    <div className="w-8 h-24 bg-white rounded-full"></div>
                    <div className="w-8 h-52 bg-white rounded-full"></div>
                </div>

                <Image className="size-36 md:size-48 rounded-full border-4 border-white object-cover relative z-10" 
                    src={testimony.author.image || ""}  alt={testimony.author.name}
                    width={192} height={192}
                />

            </div>

            {/* Content Section */}
            <div className="relative flex-1 flex gap-6">
                
                {/* Left Quote Icon */}
                <RiDoubleQuotesL className="text-white text-5xl absolute -top-10 -left-5 md:-left-10" />

                <div className="w-full">
                    
                    <div className="mb-5">
                        <h3 className="text-emerald-50 text-lg font-semibold">
                            {testimony.author.name}
                        </h3>
                        <p className="text-white text-sm">
                            {testimony.author.role}
                        </p>
                    </div>

                    <p className="text-white text-sm leading-relaxed mt-2">
                        &ldquo;{testimony.content}&rdquo;
                    </p>

                </div>

                {/* Right Quote Icon */}
                <RiDoubleQuotesR className="text-white text-5xl absolute -bottom-12 right-0" />

            </div>

        </div>
    )
}

export { TestimonyCard }
