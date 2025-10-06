"use client"

import React from "react"
import Image from "next/image"
import { RatingStars } from "@/components"

interface TestimonyCardTwoProps {
    testimony: {
        id: string
        title: string
        content: string
        author: {
            name: string
            image: string
        }
        rating: number
    }
}

const TestimonyCardTwo: React.FC<TestimonyCardTwoProps> = ({ testimony }) => {
    return (
        <div className="bg-brand p-8 rounded-xl space-y-3 text-white">
            
            <h2 className="text-lg font-bold">{testimony.title}</h2>
            
            <p className="leading-6 text-sm text-gray-100">
                {testimony.content}
            </p>
            
            <div className="inline-flex items-center gap-3">
                
                <Image
                    src={testimony.author.image}
                    alt={testimony.author.name}
                    width={60}
                    height={60}
                    className="size-15 border-2 border-white rounded-full object-cover"
                />
                
                <div className="space-y-0.5">
                    
                    <h3 className="text-sm font-semibold text-white">
                        {testimony.author.name}
                    </h3>
                    
                    <RatingStars  rating={testimony.rating} showCount={false}
                        size="sm" className="text-yellow-400"
                    />
                    
                </div>
                
            </div>
            
        </div>
    )
}

export { TestimonyCardTwo }
