"use client"

import React from "react"
import { Button } from "@/components"
import Link from "next/link"

const HeroBanner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-full min-h-[60vh] lg:min-h-[90vh] relative 
                w-full bg-[url('/img/banner/1.jpg')] bg-cover bg-center">

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container relative flex flex-col justify-center items-center gap-y-6 text-center">

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium sm:leading-12 lg:leading-14 2xl:leading-[70px]"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    Discover Amazing Products, <br className="hidden md:block" /> Best Deals for You
                </h1>

                <p className="font-inter text-white text-sm md:text-base font-light tracking-wider"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    Explore our curated collection and find what you love
                </p>

                {/* Button */}
                <Link href="/products" data-aos="fade-up" data-aos-delay="300">
                    <Button variant="brand" size="lg" className="text-white !px-12 rounded-lg">
                        Shop Now
                    </Button>
                </Link>

            </div>

        </div>
    )
}

export { HeroBanner }
