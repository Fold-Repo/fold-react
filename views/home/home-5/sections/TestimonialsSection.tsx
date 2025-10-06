"use client"

import React from "react"
import { TestimonyCardTwo } from "@/components"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const TestimonialsSection: React.FC = () => {
    
    // Testimonial data from home-5.html
    const testimonialsData = [
        {
            id: "1",
            title: "It was a amazing experience!",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            author: {
                name: "Sarah Taylor",
                image: "/img/users/1.jpg"
            },
            rating: 5
        },
        {
            id: "2",
            title: "It was a amazing experience!",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            author: {
                name: "Sarah Taylor",
                image: "/img/users/2.jpg"
            },
            rating: 5
        },
        {
            id: "3",
            title: "It was a amazing experience!",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            author: {
                name: "Sarah Taylor",
                image: "/img/users/1.jpg"
            },
            rating: 5
        },
        {
            id: "4",
            title: "It was a amazing experience!",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            author: {
                name: "Sarah Taylor",
                image: "/img/users/2.jpg"
            },
            rating: 5
        }
    ]

    return (
        <div className="w-full py-12 bg-[#FBF0EC] dark:bg-gray-800" data-aos="fade-up" data-aos-delay="100">
            
            <div className="container space-y-12 overflow-hidden">
                
                <div className="max-w-md mx-auto text-center space-y-3" data-aos="fade-up" data-aos-delay="200">
                    
                    <h2 className="text-sm font-medium leading-tight text-brand">
                        Happy parents
                    </h2>
                    
                    <h2 className="text-2xl font-bold leading-tight !text-gray-900">
                        Our testimonial
                    </h2>
                    
                    <p className="text-sm leading-6 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa.
                    </p>
                    
                </div>
                
                <div className="max-w-7xl mx-auto space-y-12" data-aos="fade-up" data-aos-delay="300">
                    
                    <SwiperCarousel
                        mobile={1}
                        md={2}
                        lg={2}
                        xl={2}
                        space={10}
                        spaceMd={10}
                        spaceLg={10}
                        loop={false}
                        autoplay={true}
                        autoplayDelay={4000}
                        navPrevClass=".nav-prev-testimonials"
                        navNextClass=".nav-next-testimonials"
                        paginationClass=".testimonials-pagination"
                        className="testimonials-swiper">
                        
                        {testimonialsData.map((testimony) => (
                            <SwiperSlide key={testimony.id}>
                                <TestimonyCardTwo testimony={testimony} />
                            </SwiperSlide>
                        ))}
                        
                    </SwiperCarousel>
                    
                    <div className="flex items-center justify-center gap-3">
                        
                        <div className="nav-prev-testimonials size-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 shadow cursor-pointer hover:shadow-lg transition-shadow">
                            <ChevronLeftIcon className="size-4 text-gray-800 dark:text-gray-200" />
                        </div>
                        
                        <div className="nav-next-testimonials size-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 shadow cursor-pointer hover:shadow-lg transition-shadow">
                            <ChevronRightIcon className="size-4 text-gray-800 dark:text-gray-200" />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export { TestimonialsSection }
