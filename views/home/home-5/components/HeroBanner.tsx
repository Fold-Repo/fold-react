"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const HeroBanner: React.FC = () => {
    return (
        <div className="relative bg-[#FFE3E3] overflow-hidden flex flex-col lg:flex-row items-center">
            
            <div className="container relative z-10 flex flex-wrap space-y-10 items-center pt-16">
                
                <div className="w-full lg:w-[40%] text-left space-y-8" data-aos="fade-right" data-aos-delay="200">
                    
                    <h1 className="text-3xl lg:text-5xl font-bold !text-gray-900 leading-snug">
                        Find you <span className="text-blue-600">best fashion</span> for your children
                    </h1>
                    
                    <p className="text-base leading-6 text-gray-800">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
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
                        src="/img/banner/6.png"
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
