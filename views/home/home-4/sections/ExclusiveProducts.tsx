"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components"

const ExclusiveProducts: React.FC = () => {
    return (
        <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            
            <section className="container relative grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                
                <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg space-y-5 relative z-10" data-aos="fade-right" data-aos-delay="200">
                    
                    <span className="inline-block bg-brand text-white text-xs px-3 py-1.5 rounded-lg">
                        Exclusive product
                    </span>

                    <h2 className="text-xl md:text-2xl font-bold text-brand">
                        Moisturizer Sugar Scrubs
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300">
                        Sugar scrubs brighten tired, dull-looking skin to promote healthy, smooth, and flawless skin.
                        Sugar scrubs also fight skin aging in a natural way.
                    </p>

                    <p className="text-gray-700 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Ingredients:</span>
                        <span className="text-blue-600"> brown sugar, coconut, jojoba, olive, almond, or grapeseed.</span>
                    </p>

                    <Button variant="outline-brand">
                        Learn more
                    </Button>
                </div>

                <div className="relative z-10" data-aos="fade-left" data-aos-delay="300">
                    <Image 
                        src="/img/home/4/6.png" 
                        alt="Moisturizer Product"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>

            </section>

            <div className="bg-brand absolute right-0 left-0 md:left-1/2 top-1/2 -translate-y-1/2 h-[300px] md:h-[380px] lg:h-[420px] rounded-md"></div>

        </div>
    )
}

export { ExclusiveProducts }
