"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarGroup } from "@heroui/react"
import { StarIcon } from "@heroicons/react/24/solid"

const HeroBanner: React.FC = () => {
    return (
        <div className="container mt-6" data-aos="fade-up" data-aos-delay="100">
            
            <div className="container relative min-h-[65vh] sm:min-h-[70vh] lg:min-h-screen bg-white rounded-2xl bg-[url('/img/banner/4.jpg')] bg-cover bg-center overflow-hidden flex items-center justify-center">

                {/* ================= MAIN CONTENT ================= */}
                <div className="flex flex-col items-center justify-center text-center relative z-5 space-y-6">

                    <h2 className="text-3xl lg:text-5xl text-white font-semibold">
                        Modern
                        <span className="bg-brand px-2 py-1 rounded-md">Furniture</span>
                        for inspired Living
                    </h2>

                    <p className="max-w-xl mx-auto text-base text-white">
                        Customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!
                    </p>

                    <Link href="/products">
                        <Button variant="outline" className="!border-white !px-10">
                            Shop Now
                        </Button>
                    </Link>

                </div>


                {/* ================= OVERLAY ================= */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* ================= LEFT SECTION - HAPPY CLIENTS ================= */}
                <div className="absolute top-0 left-0 bg-white rounded-tl-2xl rounded-e-full py-1.5 px-8 space-y-2">

                    <AvatarGroup size="sm" isBordered>
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc" />
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1550525811-e5869dd03032" />
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                    </AvatarGroup>

                    <div className="space-y-0.5">
                        <h2 className="text-xs font-semibold text-black">+150 Happy Client</h2>
                        <div className="inline-flex items-center gap-1 text-[11px] text-gray-400">
                            <StarIcon className="w-4 h-4 text-black" />
                            <span>4.5</span>
                            <span>(+3000 Review)</span>
                        </div>
                    </div>

                </div>

                {/* ================= RIGHT SECTION - UNLIMITED FURNITURE ================= */}
                <div className="absolute bottom-0 right-0 bg-white rounded-br-2xl rounded-s-full py-3 px-8 space-y-2">

                    <h2 className="text-xs font-semibold text-black">Unlimited Furniture</h2>

                    <AvatarGroup size="sm" isBordered>
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc" />
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1550525811-e5869dd03032" />
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                    </AvatarGroup>

                </div>

            </div>

        </div>
    )
}

export default HeroBanner
