"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components"
import { Button } from "@/components"

const AboutFourView: React.FC = () => {

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

                <div className="grid md:grid-cols-2 gap-12 items-start pb-12">

                    <div className="flex flex-col gap-6">

                        <h6 className="text-yellow-500 text-sm">WHO WE ARE</h6>

                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-gray-200 tracking-wide">
                            We Help To Get Solutions
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
                            <Button className="max-w-max !px-12">Explore More</Button>
                        </Link>

                    </div>

                    <div className="relative max-w-md mx-auto">

                        <Image className="rounded-lg w-full object-cover aspect-7/7" 
                            src="/img/about/7.jpg"  alt="About"
                            width={400} height={400}
                        />

                        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 
                            bg-white dark:bg-gray-800 rounded-lg p-5 shadow w-11/12 text-center space-y-3">

                            <h2 className="text-lg font-bold">Looking for help?</h2>
                            
                            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
            {/*  ================= MAIN END ================= */}

            <Footer />
        </>
    )
}

export default AboutFourView