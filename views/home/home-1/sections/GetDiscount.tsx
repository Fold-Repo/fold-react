"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const GetDiscount: React.FC = () => {
    return (
        <div className="bg-black dark:bg-gray-800 py-10" data-aos="fade-up" data-aos-delay="50">

            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex-1 flex justify-center">
                    <Image src="/img/home/1/10.png"
                        alt="Cloth" width={300} height={300}
                        className="w-2/3 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] object-contain"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-y-5 justify-center text-center text-white dark:text-gray-100 px-4">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        Get 50% Off
                    </h2>

                    <p className="font-light text-sm sm:text-base leading-6"
                        data-aos="fade-up"
                        data-aos-delay="150">
                        for all new product purchases min. purchase $350.000
                    </p>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <Link href="/products">
                            <Button variant="brand" size="lg" className="max-w-max mx-auto !px-8 sm:!px-10"
                                rightIcon={<ArrowUpRightIcon className="w-4 h-4" />}>
                                Shop Now
                            </Button>
                        </Link>
                    </div>

                </div>

                <div className="flex-1 flex justify-center">
                    <Image src="/img/home/1/11.png"
                        alt="Cloth" width={300}
                        height={300} className="w-2/3 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] object-contain"
                    />
                </div>

            </div>

        </div>
    )
}

export { GetDiscount }
