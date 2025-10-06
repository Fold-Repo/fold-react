"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components"

const HealthyBanner: React.FC = () => {
    return (
        <div className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: "url('/img/home/2/3.jpg')" }}>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="flex flex-col items-center justify-center relative z-10 container !max-w-xl px-4 space-y-8" data-aos="fade-up" data-aos-delay="100">

                <h1 className="text-white text-2xl md:text-3xl 2xl:text-4xl font-cabin font-bold leading-snug">
                    Be Healthy & Eat Only Fresh Organic Vegetables
                </h1>

                <Link href="/products?category=organic">
                    <Button variant="brand" className="!px-8">
                        Shop Now
                    </Button>
                </Link>

            </div>

        </div>
    )
}

export { HealthyBanner }
