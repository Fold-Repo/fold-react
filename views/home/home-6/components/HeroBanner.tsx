"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const HeroBanner: React.FC = () => {
    return (
        <div className="relative bg-[#FFE3E3] min-h-auto lg:min-h-[85vh] overflow-hidden flex flex-col lg:flex-row items-center">
            
            <div className="container relative z-10 flex flex-wrap gap-y-10 items-center py-10 lg:py-0">
                
                <div className="w-full lg:w-[40%] text-left space-y-8" data-aos="fade-right" data-aos-delay="200">
                    
                    <h1 className="text-3xl lg:text-5xl font-bold !text-gray-900 leading-snug">
                        Woman New <span className="text-blue-600">Fashion </span> Collection
                    </h1>
                    
                    <p className="text-base leading-6 text-gray-800">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                    
                    <Link href="/products">
                        <Button size="lg" variant="brand">
                            Shopping now
                            <ArrowUpRightIcon className="size-4" />
                        </Button>
                    </Link>
                    
                </div>
                
                <div className="w-full lg:w-[60%] flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-left" data-aos-delay="300">
                    <Image
                        src="/img/banner/7.png"
                        alt="Banner"
                        width={600}
                        height={400}
                        className="w-full max-w-lg lg:max-w-[600px] pointer-events-none select-none"
                    />
                </div>
                
            </div>
            
        </div>
    )
}

export { HeroBanner }
