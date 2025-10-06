"use client"

import React from "react"
import Image from "next/image"
import { ServiceCard, ExperienceMakingBeautySkeleton } from "@/components"
import { ServiceType } from "@/types"
import { Button } from "@/components"
import { useGetHome4BeautyServices } from "@/service"

const ExperienceMakingBeauty: React.FC = () => {
    
    const { data: services, isLoading } = useGetHome4BeautyServices()

    if (isLoading) {
        return <ExperienceMakingBeautySkeleton />
    }

    return (
        <div className="container space-y-12" data-aos="fade-up" data-aos-delay="100">

            <div className="max-w-lg mx-auto text-center space-y-4" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    We are Experienced in making you very Beautiful
                </h2>
                <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="300">

                {/* Left big image */}
                <div className="col-span-1 flex">
                    <Image
                        src="/img/home/4/1.jpg"
                        alt="Beauty Services"
                        width={400}
                        height={400}
                        className="w-full h-full aspect-7/7 object-cover rounded-lg"
                    />
                </div>

                {/* Middle stacked */}
                <div className="col-span-1 flex flex-col gap-2">
                    <Image
                        src="/img/home/4/2.jpg"
                        alt="Beauty Treatment"
                        width={400}
                        height={114}
                        className="w-full h-full aspect-[7/2] object-cover rounded-lg"
                    />
                    <Image
                        src="/img/home/4/3.jpg"
                        alt="Beauty Care"
                        width={400}
                        height={114}
                        className="w-full h-full aspect-[7/2] object-cover rounded-lg"
                    />
                </div>

                {/* Right stacked */}
                <div className="col-span-1 flex flex-col gap-2">
                    <Image
                        src="/img/home/4/4.png"
                        alt="Beauty Products"
                        width={400}
                        height={114}
                        className="w-full h-full aspect-[7/2] object-cover rounded-lg"
                    />
                    <Image
                        src="/img/home/4/5.png"
                        alt="Beauty Essentials"
                        width={400}
                        height={114}
                        className="w-full h-full aspect-[7/2] object-cover rounded-lg"
                    />
                </div>

            </div>

            <div className="space-y-10">
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services?.map((service: ServiceType) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Button size="sm" variant="outline-brand" className="!px-6">
                        More Services
                    </Button>
                </div>

            </div>

        </div>
    )
}

export { ExperienceMakingBeauty }
