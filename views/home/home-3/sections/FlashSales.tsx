"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { useCountdown } from "@/hooks"

const FlashSales: React.FC = () => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 4)
    targetDate.setHours(23, 59, 59, 999) 

    const countdown = useCountdown(targetDate)

    return (
        <div className="flash-countdown bg-[linear-gradient(91.38deg,rgba(255,136,9,0.95)_0.82%,rgba(255,88,47,0.95)_100%)]"
            data-aos="fade-up" 
            data-aos-delay="100">

            <div className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* ================= FLASH SALE TITLE ================= */}
                <div className="flex flex-col items-start text-white space-y-1" data-aos="fade-right" data-aos-delay="200">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">FLASH</h2>
                    <p className="text-base">SALE</p>
                </div>

                {/* ================= COUNTDOWN TIMER ================= */}
                <div className="flex items-center gap-6 md:gap-10 text-white text-center" data-aos="fade-up" data-aos-delay="300">
                    
                    <div>
                        <p className="text-2xl md:text-3xl font-semibold">{countdown.days.toString().padStart(2, '0')}</p>
                        <span className="text-[10px] uppercase tracking-wide">Days</span>
                    </div>

                    <div>
                        <p className="text-2xl md:text-3xl font-semibold">{countdown.hours.toString().padStart(2, '0')}</p>
                        <span className="text-[10px] uppercase tracking-wide">Hours</span>
                    </div>

                    <span className="text-lg md:text-xl font-medium">:</span>

                    <div>
                        <p className="text-2xl md:text-3xl font-semibold">{countdown.minutes.toString().padStart(2, '0')}</p>
                        <span className="text-[10px] uppercase tracking-wide">Minutes</span>
                    </div>

                    <span className="text-lg md:text-xl font-medium">:</span>

                    <div>
                        <p className="text-2xl md:text-3xl font-semibold">{countdown.seconds.toString().padStart(2, '0')}</p>
                        <span className="text-[10px] uppercase tracking-wide">Seconds</span>
                    </div>
                </div>

                {/* ================= OFFER & BUTTON ================= */}
                <div className="flex flex-col items-center md:items-end space-y-3 text-white" data-aos="fade-left" data-aos-delay="400">
                    <p className="text-lg md:text-2xl font-semibold">Up to 70% off</p>
                    <Button variant="ghost"  className="!text-white hover:bg-white/10" 
                        rightIcon={<ArrowUpRightIcon className="w-3 h-3" />}>
                            View All 
                    </Button>
                </div>

            </div>

        </div>
    )
}

export { FlashSales }
