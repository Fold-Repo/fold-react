"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components"
import { SwiperCarousel, SwiperSlide } from "@/components/carousel"
import { FeaturesSection } from "./FeaturesSection"

const slidesData = [
    {
        id: "slide-1",
        title: "Best Products Deals you will find anywhere Globally",
        description: "Customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!",
        backgroundImage: "/img/banner/2.png",
        buttonText: "Shop Now"
    },
    {
        id: "slide-2",
        title: "Discover Exclusive Styles at Unbeatable Prices",
        description: "Build your dream store with amazing product showcases.",
        backgroundImage: "/img/banner/3.jpg",
        buttonText: "Shop Now"
    }
]

const HeroBanner: React.FC = () => {
    return (
        <div className="relative">

            <SwiperCarousel
                mobile={1}
                md={1}
                lg={1}
                xl={1}
                space={0}
                loop={true}
                autoplay={true}
                autoplayDelay={5000}
                paginationClass=".hero-pagination"
                className="swiper">

                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex h-full min-h-[80vh] lg:min-h-[90vh] relative 
                            w-full bg-cover bg-center" style={{ backgroundImage: `url('${slide.backgroundImage}')` }}>

                            <div className="absolute inset-0 bg-black/50"></div>

                            <div className="container flex items-center">

                                <div className="!max-w-xl relative space-y-6" data-aos="fade-up" data-aos-delay="100">

                                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium leading-10 lg:leading-12 2xl:leading-14">
                                        {slide.title}
                                    </h1>

                                    <p className="font-inter text-white text-xs md:text-sm font-light leading-6" data-aos="fade-up" data-aos-delay="150">
                                        {slide.description}
                                    </p>

                                    <div data-aos="fade-up" data-aos-delay="200">
                                        <Link href="/products">
                                            <Button variant="brand" size="lg" className="text-white !px-12 rounded-lg">
                                                {slide.buttonText}
                                            </Button>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}

                <div className="hero-pagination sw-dots type-circle white flex justify-center absolute !bottom-20 z-10"></div>

            </SwiperCarousel>

            <FeaturesSection />

        </div>
    )
}

export { HeroBanner }
