"use client"

import React from "react"
import { CategoryCardThree } from "@/components"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { home7Categories } from "@/data"

const CategoriesSection: React.FC = () => {
    
    const categories = home7Categories

    return (
        <div className="space-y-12" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-xl mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    Categories
                </h2>
            </div>
            
            <div className="relative" data-aos="fade-up" data-aos-delay="300">
                
                <SwiperCarousel
                    mobile={2}
                    md={4}
                    lg={6}
                    space={15}
                    spaceMd={20}
                    spaceLg={20}
                    loop={false}
                    autoplay={false}
                    className="categories-swiper"
                    navPrevClass=".nav-prev"
                    navNextClass=".nav-next"
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryCardThree 
                                category={category}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>
                
                <div className="flex justify-center gap-3 mt-6">
                    <button className="nav-prev size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <ChevronLeftIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                    </button>
                    <button className="nav-next size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <ChevronRightIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                    </button>
                </div>
                
            </div>
            
        </div>
    )
}

export { CategoriesSection }
