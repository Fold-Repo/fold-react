"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const ReadyToRedecorate: React.FC = () => {
    return (
        <div className="bg-brand dark:bg-gray-800 py-10" data-aos="fade-up" data-aos-delay="100">

            <div className="container">

                <div className="flex flex-col items-center justify-center max-w-lg mx-auto text-white dark:text-gray-100 text-center gap-y-6" data-aos="fade-up" data-aos-delay="200">

                    {/* ================= TITLE ================= */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        Ready to Redecorate?
                    </h2>

                    {/* ================= DESCRIPTION ================= */}
                    <p className="font-light text-sm sm:text-base leading-6">
                        Browse our extensive collection of furniture and décor items to turn your inspiration into reality.
                    </p>

                    {/* ================= SHOP NOW BUTTON ================= */}
                    <Button variant="light" className="max-w-max mx-auto !px-8"
                        rightIcon={<ArrowUpRightIcon className="w-3 h-3" />}>
                        Shop Now
                    </Button>

                </div>

            </div>

        </div>
    )
}

export { ReadyToRedecorate }
