"use client"

import React from "react"
import Link from "next/link"
import { Image } from "@heroui/react"

// Collections data
const collectionsData = [
    {
        id: 1,
        title: "Single Sofa",
        image: "/img/home/3/1.jpg",
        items: ["Modular Sofa", "Sleeper Sofa", "Tuxedo Sofa", "Sectional Sofa"],
        badge: "NEW COLLECTION",
        offer: "20% OFFER",
        variant: "large" // large card with offer section
    },
    {
        id: 2,
        title: "Lighting Lamp",
        image: "/img/home/3/2.jpg",
        items: ["Modular Sofa", "Sleeper Sofa", "Tuxedo Sofa", "Sectional Sofa"],
        badge: "NEW COLLECTION",
        variant: "medium-left" // medium card with content on left
    },
    {
        id: 3,
        title: "Lighting Lamp",
        image: "/img/home/3/3.jpg",
        items: ["Modular Sofa", "Sleeper Sofa", "Tuxedo Sofa", "Sectional Sofa"],
        badge: "NEW COLLECTION",
        variant: "medium-right" // medium card with content on right
    }
]

const Collections: React.FC = () => {
    return (
        <div className="container" data-aos="fade-up" data-aos-delay="100">
            
            <div className="grid md:grid-cols-12 gap-3 items-stretch">

                {/* ================= LARGE COLLECTION CARD ================= */}
                {collectionsData.filter(item => item.variant === "large").map((collection) => (
                    <div key={collection.id} className="md:col-span-5" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-stone-50 dark:bg-gray-800 rounded-xl overflow-hidden p-5 space-y-6 h-full flex flex-col justify-between">
                            
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex flex-col gap-6 w-full">
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                                            {collection.title}
                                        </h3>
                                        <ul className="space-y-2 text-stone-900 dark:text-stone-300 text-xs">
                                            {collection.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link href="#" className="text-blue-600 dark:text-blue-400 text-xs underline hover:text-blue-700 dark:hover:text-blue-300">
                                        View All
                                    </Link>
                                </div>
                                <div className="w-full flex justify-center">
                                    <Image
                                        src={collection.image}
                                        alt={collection.title}
                                        width={400}
                                        height={300}
                                        className="rounded-lg w-full aspect-7/5 md:aspect-[7/8] object-cover shadow"
                                        radius="lg"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-end justify-center bg-brand dark:bg-blue-700 text-white text-xs w-full h-[64px] rounded-lg pb-2">
                                <div className="absolute top-0 bg-white dark:bg-gray-800 text-[11px] uppercase text-black dark:text-white flex items-center justify-center py-2 px-4 rounded-b-lg shadow">
                                    {collection.badge}
                                </div>
                                <span>{collection.offer}</span>
                            </div>

                        </div>
                    </div>
                ))}

                {/* ================= MEDIUM COLLECTION CARDS ================= */}
                <div className="md:col-span-7 flex flex-col space-y-3">
                    {collectionsData.filter(item => item.variant !== "large").map((collection) => (
                        <div key={collection.id} className="bg-stone-50 dark:bg-gray-800 rounded-xl overflow-hidden flex flex-col md:flex-row" data-aos="fade-up" data-aos-delay="300">
                            
                            {/* Content on left for medium-left variant */}
                            {collection.variant === "medium-left" && (
                                <>
                                    <div className="flex flex-col gap-6 p-5 w-full md:w-1/2">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                                                {collection.title}
                                            </h3>
                                            <ul className="space-y-2 text-stone-900 dark:text-stone-300 text-xs">
                                                {collection.items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Link href="#" className="text-blue-600 dark:text-blue-400 text-xs underline hover:text-blue-700 dark:hover:text-blue-300">
                                            View All
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-center relative">
                                        <Image
                                            src={collection.image}
                                            alt={collection.title}
                                            width={400}
                                            height={200}
                                            className="rounded-e-lg w-full h-full object-cover aspect-[7/3]"
                                            radius="lg"
                                        />
                                        <div className="absolute top-3 left-3 bg-white dark:bg-gray-900 text-[10px] uppercase text-black dark:text-white px-3 py-1.5 rounded-full">
                                            {collection.badge}
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Content on right for medium-right variant */}
                            {collection.variant === "medium-right" && (
                                <>
                                    <div className="w-full md:w-1/2 flex justify-center relative">
                                        <Image
                                            src={collection.image}
                                            alt={collection.title}
                                            width={400}
                                            height={200}
                                            className="rounded-e-lg w-full h-full object-cover aspect-[7/3]"
                                            radius="lg"
                                        />
                                        <div className="absolute top-3 left-3 bg-white dark:bg-gray-900 text-[10px] uppercase text-black dark:text-white px-3 py-1.5 rounded-full">
                                            {collection.badge}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 p-5 w-full md:w-1/2">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                                                {collection.title}
                                            </h3>
                                            <ul className="space-y-2 text-stone-900 dark:text-stone-300 text-xs">
                                                {collection.items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Link href="#" className="text-blue-600 dark:text-blue-400 text-xs underline hover:text-blue-700 dark:hover:text-blue-300">
                                            View All
                                        </Link>
                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export { Collections }
