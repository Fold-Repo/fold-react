"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components"
import { Button } from "@/components"

const AboutTwoView: React.FC = () => {

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
            <div className="section-md space-y-12">

                <div className="container grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center relative">
                        <Image src="/img/about/3.png"
                            alt="Our Story" className="w-full max-w-2xl"
                            width={600} height={400}
                        />
                    </div>

                    <div className="flex flex-col gap-6">

                        <div>
                            <p className="text-blue-600 uppercase text-xs tracking-[6px] font-medium mb-2">A BIT</p>
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-gray-200 tracking-wide">
                                ABOUT US
                            </h2>
                        </div>

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
                    
                </div>

            </div>
            {/*  ================= MAIN END ================= */}

            <Footer />
        </>
    )
}

export default AboutTwoView
