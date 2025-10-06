"use client"

import React from "react"
import { TestimonyCardThree } from "@/components"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { home7Testimonials } from "@/data"

const TestimonialsSection: React.FC = () => {
    
    const testimonials = home7Testimonials

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-lg mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    What Our Customers are saying
                </h2>
            </div>
            
            <div className="flex items-center gap-5 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                
                <button className="nav-testimonial-prev size-7 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ChevronLeftIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                </button>
                
                <SwiperCarousel
                    mobile={1}
                    md={1}
                    lg={1}
                    space={10}
                    spaceMd={10}
                    spaceLg={10}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={5000}
                    className="testimonials-swiper"
                    navPrevClass=".nav-testimonial-prev"
                    navNextClass=".nav-testimonial-next"
                >
                    {testimonials.map((testimony) => (
                        <SwiperSlide key={testimony.id}>
                            <TestimonyCardThree testimony={testimony} />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>
                
                <button className="nav-testimonial-next size-7 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ChevronRightIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                </button>
                
            </div>
            
        </div>
    )
}

export { TestimonialsSection }
