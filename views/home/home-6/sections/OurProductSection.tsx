"use client"

import React, { useState } from "react"
import { ProductCardSeven, Tab2, OurProductsSkeleton } from "@/components"
import { useGetHome6OurProducts } from "@/service"



const OurProductSection = () => {

    const [activeTab, setActiveTab] = useState("hot")
    const { data: products, isLoading } = useGetHome6OurProducts(activeTab)

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
    }

    const tabItems = [
        {
            id: "hot",
            label: "Hot sale"
        },
        {
            id: "onsale",
            label: "On sale"
        },
        {
            id: "trending",
            label: "Trending now"
        },
        {
            id: "new",
            label: "New arrival"
        }
    ]

    if (isLoading) {
        return <OurProductsSkeleton />
    }

    return (
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">

            <div className="flex flex-wrap items-center justify-between gap-5" data-aos="fade-up" data-aos-delay="200">

                <h2 className="text-lg lg:text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    Our Product
                </h2>

                <Tab2
                    items={tabItems}
                    activeId={activeTab}
                    onTabChange={handleTabChange}
                />

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2" data-aos="fade-up" data-aos-delay="300">

                {products?.map((product) => (
                    <ProductCardSeven
                        key={product.id}
                        product={product}
                        showFlashSale={false}
                    />
                )) || []}

            </div>

        </div>
    )
}

export { OurProductSection }
