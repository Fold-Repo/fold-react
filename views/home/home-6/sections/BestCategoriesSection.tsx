"use client"

import React from "react"
import { CategoryCardTwo } from "@/components"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { home6BestCategories } from "@/data"

const BestCategoriesSection: React.FC = () => {
    
    const categories = home6BestCategories

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white" data-aos="fade-up" data-aos-delay="200">
                Best Categories
            </h2>
            
            <div className="relative" data-aos="fade-up" data-aos-delay="300">
                
                <SwiperCarousel
                    mobile={1}
                    md={3}
                    lg={5}
                    space={10}
                    spaceMd={10}
                    spaceLg={10}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={3000}
                    className="categories-swiper"
                    navPrevClass=".nav-prev"
                    navNextClass=".nav-next"
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryCardTwo 
                                category={category}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>
                
                <button className="nav-prev absolute top-1/2 -translate-y-1/2 -left-3 z-10 size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ChevronLeftIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                </button>
                
                <button className="nav-next absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ChevronRightIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                </button>
                
            </div>
            
        </div>
    )
}

export { BestCategoriesSection }
