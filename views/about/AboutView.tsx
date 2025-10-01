"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components"

const statsData = [
    { value: "2,500,000", label: "Happy Customers" },
    { value: "50,000", label: "Products Available" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "100", label: "Countries Served" }
]

const AboutView: React.FC = () => {

    return (
        <>
            <Header />

            {/*  ================= BRRADCRUMBS START ================= */}
            <div className="relative w-full bg-brand">
                <div className="container flex items-center justify-between h-[150px] lg:h-[200px] overflow-hidden">

                    <div className="space-y-1 text-white">
                        <h2 className="relative text-2xl font-semibold z-10">About Fold</h2>
                        <p className="text-xs max-w-md leading-6">Revolutionizing online shopping with passion, innovation, and an
                            unwavering commitment to customer satisfaction</p>
                    </div>

                    <Image className="hidden sm:block w-auto h-[150px] lg:h-[200px]" 
                        src="/img/about/1.png"  alt="Contact" width={200} height={200}/>
                        
                </div>
            </div>
            {/*  ================= BRRADCRUMBS END ================= */}

            {/*  ================= MAIN START ================= */}
            <div className="section-md space-y-12">

                {/*  ================= OUR STORY ================= */}
                <div className="w-full container grid lg:grid-cols-2 gap-10 items-center">

                    <div>

                        <h2 className="text-2xl font-semibold mb-6">
                            <span className="text-blue-600">Our</span>
                            <span className="text-gray-900 dark:text-gray-100"> Story</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 leading-7">
                            Founded in 2018, ShopNext began as a small startup with a big vision: to create an
                            e-commerce platform that puts customers first. What started in a garage with just
                            three passionate entrepreneurs has grown into a thriving marketplace serving millions
                            of customers worldwide.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 leading-7 mt-4">
                            We recognized that online shopping could be more than just transactions – it could be
                            experiences. Every feature we build, every partnership we form, and every decision we
                            make is guided by our commitment to making shopping online as enjoyable and seamless
                            as possible.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 leading-7 mt-4">
                            Today, we're proud to be a trusted destination for quality products, exceptional
                            service, and innovative shopping experiences that connect people with the things they
                            love.
                        </p>

                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Image  src="/img/about/2.png" alt="Our Story" 
                            className="w-full max-w-2xl"  width={600} height={400} />
                    </div>

                </div>

                {/*  ================= ABOUT STATS ================= */}
                <div className="w-full bg-slate-700 py-14">
                    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {statsData.map((stat, index) => (
                            <div key={index}>
                                <div className="text-[#667EEA] text-xl font-semibold">{stat.value}</div>
                                <div className="text-white text-lg pt-3 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*  ================= READ TO JOIN  ================= */}
                <div className="w-full bg-zinc-100 dark:bg-gray-800 py-16 px-6 md:px-16">

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">

                        <div className="max-w-lg flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-black dark:text-gray-300">
                                Ready to Join Our Community?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-6">
                                Discover amazing products, enjoy seamless shopping, and experience customer service that truly
                                cares about you.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">

                            <Link href="/products">
                                <Button className="!px-12">Start Shopping</Button>
                            </Link>

                            <Link href="/contact">
                                <Button variant="outline-brand" className="!px-12">Contact Us</Button>
                            </Link>

                        </div>
                        
                    </div>

                </div>

            </div>
            {/*  ================= MAIN END ================= */}

            <Footer />
        </>
    )
}

export default AboutView