"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components"

const HeroBanner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-full min-h-[50vh] lg:min-h-[85vh] relative w-full bg-[url('/img/banner/8.png')] bg-cover bg-center">
            
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="container relative flex flex-col justify-end items-end gap-y-6" data-aos="fade-left" data-aos-delay="200">
                
                <div className="!max-w-sm relative space-y-6">
                    
                    <h1 className="text-white text-2xl lg:text-3xl 2xl:text-4xl font-medium leading-snug">
                        Stylist Picks beat the Heat
                    </h1>
                    
                    <Link href="/products/style-1">
                        <Button variant="outline" size="lg" className="!border-white text-white !px-12 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                            Shop Now
                        </Button>
                    </Link>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export { HeroBanner }
