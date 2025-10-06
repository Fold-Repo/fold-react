"use client"

import React from "react"
import { ServiceCardTwo, RecommendedServicesSkeleton } from "@/components"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { VendorType } from "@/types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useGetHome4RecommendedServices } from "@/service"

const RecommendedServices: React.FC = () => {
    
    const { data: vendors, isLoading } = useGetHome4RecommendedServices()

    if (isLoading) {
        return <RecommendedServicesSkeleton />
    }

    return (
        <div className="container space-y-12" data-aos="fade-up" data-aos-delay="100">

            <div className="max-w-lg mx-auto text-center space-y-2" data-aos="fade-up" data-aos-delay="200">
                <p className="text-xs text-[#BA7894] dark:text-white uppercase">
                    Our Services
                </p>
                <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    Recommended
                </h2>
                <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                </p>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="300">
                
                <SwiperCarousel
                    mobile={1}
                    md={2}
                    lg={3}
                    xl={4}
                    space={10}
                    spaceMd={10}
                    spaceLg={10}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={4000}
                    navPrevClass=".nav-prev-services"
                    navNextClass=".nav-next-services"
                    paginationClass=".services-pagination"
                    className="recommended-services-swiper">
                    {vendors?.map((vendor: VendorType) => (
                        <SwiperSlide key={vendor.id}>
                            <ServiceCardTwo vendor={vendor} />
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>

                <div className="nav-prev-services absolute top-1/2 -translate-y-1/2 -left-3 z-10 size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                    <ChevronLeftIcon className="size-4 text-gray-800 dark:text-gray-200" />
                </div>

                <div className="nav-next-services absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                    <ChevronRightIcon className="size-4 text-gray-800 dark:text-gray-200" />
                </div>

            </div>

        </div>
    )
}

export { RecommendedServices }
