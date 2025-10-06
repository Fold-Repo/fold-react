"use client"

import React, { useMemo } from "react"
import { Button } from "@/components"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { useCountdown } from "@/hooks"

const HeroBanner: React.FC = () => {
    
    const targetDate = useMemo(() => {
        const date = new Date()
        date.setHours(date.getHours() + 4)
        return date
    }, [])
    
    const countdown = useCountdown(targetDate)
    

    return (
        <div className="relative bg-white dark:bg-gray-800 min-h-auto lg:min-h-[85vh] overflow-hidden flex flex-col lg:flex-row items-center">
            
            <div className="container relative z-10 flex items-center py-10 lg:py-0">

                <div className="w-full lg:w-[40%] lg:pr-[8%] text-left space-y-8">

                    <h1 className="text-3xl lg:text-5xl font-bold leading-snug dark:text-gray-100" data-aos="fade-up" data-aos-delay="100">
                        Never Forget How <span className="text-blue-600">Beautiful</span> You Are
                    </h1>

                    <Button size="lg" data-aos="fade-up" data-aos-delay="200">
                        Book a Session
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </Button>

                </div>

            </div>

            <div className="relative lg:absolute right-0 top-0 w-full lg:w-[60%] h-[500px] lg:h-full overflow-hidden pb-0 lg:pb-10">
                <div className="relative w-full h-full">
                    <img  className="w-full h-full object-cover rounded-bl-[30px] lg:rounded-bl-[50px]"
                        src="/img/banner/5.jpg" 
                        alt="Beauty Services"
                    />
                    <div className="absolute inset-0 bg-sky-200/70 rounded-bl-[30px] lg:rounded-bl-[50px] mix-blend-multiply"></div>
                </div>
            </div>

            <div className="absolute bottom-20 lg:bottom-28 w-full flex justify-center">

                <div className="relative">

                    <div className="flex items-start flex-wrap gap-x-10 justify-between bg-white px-5 py-3 min-h-24 text-brand max-w-lg rounded-md" data-aos="fade-up" data-aos-delay="300">
                        <p className="text-sm font-bold pb-0 mb-0">Grand Opening</p>
                        <span className="text-sm">All items are 25% Discount for New Member!</span>
                    </div>

                    <div className="absolute -bottom-20 lg:-bottom-12 right-3 bg-[linear-gradient(93.78deg,#0069F4_1.12%,#A881FF_108.91%)] text-white flex flex-wrap items-center justify-center gap-8 p-5 rounded-md shadow-md font-inter w-full sm:min-w-lg" data-aos="fade-up" data-aos-delay="400">
                        
                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">
                                {(countdown.hours || 0).toString().padStart(2, '0')}
                            </span>
                            <span className="text-xs font-light">hours</span>
                        </div>

                        <span className="text-3xl font-bold">:</span>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">
                                {(countdown.minutes || 0).toString().padStart(2, '0')}
                            </span>
                            <span className="text-xs font-light">minutes</span>
                        </div>

                        <span className="text-3xl font-bold">:</span>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">
                                {(countdown.seconds || 0).toString().padStart(2, '0')}
                            </span>
                            <span className="text-xs font-light">seconds</span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export { HeroBanner }
