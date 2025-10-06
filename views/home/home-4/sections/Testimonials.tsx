"use client"

import React from "react"
import { TestimonyCard } from "@/components/cards/testimony"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { Review } from "@/types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const testimonialsData: Review[] = [
    {
        id: "1",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it looks like readable English.",
        author: {
            name: "Leslie Alexander",
            role: "Customer",
            image: "/img/users/3.png"
        },
        rating: 5,
        date: "2024-01-15"
    },
    {
        id: "2", 
        content: "The beauty services here are absolutely amazing! The staff is professional and the results exceeded my expectations. I would definitely recommend this place to anyone looking for quality beauty treatments.",
        author: {
            name: "Sarah Johnson",
            role: "Customer",
            image: "/img/users/3.png"
        },
        rating: 5,
        date: "2024-01-20"
    },
    {
        id: "3",
        content: "I've been coming here for months and I'm always impressed with the quality of service. The atmosphere is relaxing and the professionals are skilled. Highly recommended!",
        author: {
            name: "Michael Chen",
            role: "Customer", 
            image: "/img/users/3.png"
        },
        rating: 5,
        date: "2024-01-25"
    }
]

const Testimonials: React.FC = () => {
    return (
        <div className="container space-y-12 my-12" data-aos="fade-up" data-aos-delay="100">
            
            <div className="max-w-lg mx-auto text-center space-y-2" data-aos="fade-up" data-aos-delay="200">
                <p className="text-xs text-[#BA7894] dark:text-white uppercase">
                    Testimonials
                </p>
                <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    What our Customers says...
                </h2>
            </div>

            <div className="bg-brand dark:bg-gray-800 rounded-3xl min-h-[400px] py-20 px-5 overflow-hidden relative">
                
                <SwiperCarousel
                    mobile={1}
                    md={1}
                    lg={1}
                    xl={1}
                    space={0}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={5000}
                    navPrevClass=".nav-prev-testimonials"
                    navNextClass=".nav-next-testimonials"
                    paginationClass=".testimonials-pagination"
                    className="test_swiper">
                    {testimonialsData.map((testimony) => (
                        <SwiperSlide key={testimony.id}>
                            <TestimonyCard testimony={testimony} />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>

                <div className="flex items-center justify-center gap-5 absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2">
                    
                    <div className="nav-prev-testimonials size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                        <ChevronLeftIcon className="size-4 text-gray-800 dark:text-gray-200" />
                    </div>

                    <div className="nav-next-testimonials size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                        <ChevronRightIcon className="size-4 text-gray-800 dark:text-gray-200" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export { Testimonials }
