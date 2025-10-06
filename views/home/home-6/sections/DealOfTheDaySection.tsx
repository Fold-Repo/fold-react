"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components"

const DealOfTheDaySection: React.FC = () => {
    return (
        <div className="w-full bg-brand dark:bg-gray-800 py-12 md:py-0 flex items-center justify-between" data-aos="fade-up" data-aos-delay="100">
            
            <div className="container flex items-center justify-between gap-10 flex-wrap">
                
                <div className="max-w-md space-y-5 md:space-y-8" data-aos="fade-right" data-aos-delay="200">
                    
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white capitalize">
                        Deal of the Day
                    </h2>
                    
                    <p className="text-sm text-white leading-7">
                        Get the best deal of the day on selected products. Hurry up, the offer lasts until midnight!
                    </p>
                    
                    <Link href="/products">
                        <Button variant="light" size="lg" className="!px-6">
                            Shopping now
                        </Button>
                    </Link>
                    
                </div>
                
                <div className="hidden md:block" data-aos="fade-left" data-aos-delay="300">
                    <Image
                        src="/img/home/6/1.png"
                        alt="Deal of the Day Product"
                        width={250}
                        height={300}
                        className="w-full max-w-[250px] aspect-auto object-cover object-center"
                    />
                </div>
                
            </div>
            
        </div>
    )
}

export { DealOfTheDaySection }
