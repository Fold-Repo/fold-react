"use client"

import React, { useMemo } from "react"
import { ProductCardEight, FlashSalesSectionSkeleton } from "@/components"
import { ProductType } from "@/types"
import { useCountdown } from "@/hooks"
import { useGetHome5FlashSaleProducts } from "@/service"

const FlashSalesSection: React.FC = () => {
    
    const { data: flashSaleProducts, isLoading } = useGetHome5FlashSaleProducts()

    const targetDate = useMemo(() => {
        const date = new Date()
        date.setDate(date.getDate() + 4)
        date.setHours(23, 59, 59, 999)
        return date
    }, [])

    const countdown = useCountdown(targetDate)

    if (isLoading) {
        return <FlashSalesSectionSkeleton />
    }

    return (
        <div className="space-y-12" data-aos="fade-up" data-aos-delay="100">
            
            <div className="flex flex-wrap items-center gap-5 justify-between" data-aos="fade-up" data-aos-delay="200">
                
                <div className="max-w-md space-y-3">
                    <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                        Kidz time flash sale
                    </h2>
                    <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                </div>
                
                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
                    
                    <div className="bg-brand rounded-lg inline-flex items-center justify-center size-10 text-white text-sm">
                        {(countdown.days || 0).toString().padStart(2, '0')}
                    </div>
                    
                    <span className="text-brand text-2xl font-semibold">:</span>
                    
                    <div className="bg-brand rounded-lg inline-flex items-center justify-center size-10 text-white text-sm">
                        {(countdown.hours || 0).toString().padStart(2, '0')}
                    </div>
                    
                    <span className="text-brand text-2xl font-semibold">:</span>
                    
                    <div className="bg-brand rounded-lg inline-flex items-center justify-center size-10 text-white text-sm">
                        {(countdown.minutes || 0).toString().padStart(2, '0')}
                    </div>
                    
                    <span className="text-brand text-2xl font-semibold">:</span>
                    
                    <div className="bg-brand rounded-lg inline-flex items-center justify-center size-10 text-white text-sm">
                        {(countdown.seconds || 0).toString().padStart(2, '0')}
                    </div>
                    
                </div>
                
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2" data-aos="fade-up" data-aos-delay="400">
                
                {flashSaleProducts?.map((product, index) => (
                    <ProductCardEight 
                        key={index} 
                        product={product}
                    />
                )) || []}
                
            </div>
            
        </div>
    )
}

export { FlashSalesSection }
