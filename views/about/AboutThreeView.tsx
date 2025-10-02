"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components"
import { Button } from "@/components"

// Gallery images data
const galleryImages = [
    { src: "/img/about/4.png", alt: "1" },
    { src: "/img/about/5.png", alt: "2" },
    { src: "/img/about/6.png", alt: "3" }
]

const AboutThreeView: React.FC = () => {

    return (
        <>
            <Header />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", isActive: true }
                ]}
                separator={<span className="text-gray-400">/</span>}
                variant='center'
            />

            {/*  ================= MAIN START ================= */}
            <div className="container section-md space-y-12">

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="flex flex-col gap-6">

                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-gray-200 tracking-wide">
                            ABOUT US
                        </h2>

                        <p className="text-stone-600 dark:text-gray-300 leading-8">
                            Lorem ipsum dolor sit amet consectetur. Laoreet faucibus eget odio ac. Curabitur sed ut cursus
                            tincidunt tincidunt at orci. Velit congue nunc malesuada blandit commodo arcu dictumst tincidunt
                            tellus. Felis tortor tristique egestas curabitur sollicitudin pretium ut condimentum rhoncus. Proin
                            purus odio aliquam dictumst a mauris facilisi amet. Facilisis rhoncus sollicitudin lorem a ac. Et
                            sapien ante enim urna sit platea nibh. Arcu pharetra orci nisi neque. Ultrices mattis nunc cursus
                            eros. Bibendum quam egestas ultrices eleifend.
                        </p>

                        <Link href="/products">
                            <Button variant="ghost" className="max-w-max text-brand">Explore More</Button>
                        </Link>

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div className="bg-indigo-950 dark:bg-gray-800 rounded-md p-6 text-white flex flex-col gap-y-3">
                            <div className="text-2xl font-semibold uppercase">15+</div>
                            <div className="text-xs uppercase">Years of Experience</div>
                        </div>

                        <div className="bg-indigo-950 dark:bg-gray-800 rounded-md p-6 text-white flex flex-col gap-y-3">
                            <div className="text-2xl font-semibold uppercase">95</div>
                            <div className="text-xs uppercase">International Store</div>
                        </div>

                        <div className="bg-blue-600 col-span-2 rounded-md p-6 text-white">

                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-semibold uppercase">1M+</div>
                                <button className="text-xs uppercase">View</button>
                            </div>

                            <div className="mt-4">
                                <div className="text-xs uppercase mb-2">Happy Customers</div>
                                <div className="w-full h-2 bg-white/40 rounded-md overflow-hidden">
                                    <div className="h-full bg-gray-800 w-3/4 rounded-md"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden aspect-9/4">
                            <Image className="w-full h-full object-cover object-center" 
                                src={image.src} alt={image.alt} width={400}
                                height={200}
                            />
                        </div>
                    ))}
                </div>

            </div>
            {/*  ================= MAIN END ================= */}

            <Footer />
        </>
    )
}

export default AboutThreeView