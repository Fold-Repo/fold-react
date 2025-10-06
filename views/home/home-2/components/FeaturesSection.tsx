"use client"

import React from "react"

interface FeatureItem {
    id: string
    title: string
    description: string
    icon: string
    alt: string
}

const featuresData: FeatureItem[] = [
    {
        id: "return-policy",
        title: "Return Policy",
        description: "Money Back Guarantee",
        icon: "/icon/return.svg",
        alt: "Return Policy"
    },
    {
        id: "free-shipping",
        title: "Free Shipping",
        description: "On All Orders Over $45.00",
        icon: "/icon/shipping.svg",
        alt: "Free Shipping"
    },
    {
        id: "store-locator",
        title: "Store Locator",
        description: "Find Your Nearest Store",
        icon: "/icon/store.svg",
        alt: "Store Locator"
    }
]

const FeaturesSection: React.FC = () => {
    return (
        <div className="container">

            <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow p-6 rounded-lg -mt-12 relative z-10" data-aos="fade-up" data-aos-delay="200">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 text-left">

                    {featuresData.map((feature) => (
                        <div key={feature.id} className="flex items-center justify-center p-4 gap-4">
                            <img 
                                src={feature.icon} 
                                alt={feature.alt} 
                                className="w-10 h-10 object-contain" 
                            />
                            <div>
                                <h3 className="text-gray-900 dark:text-gray-100 text-base font-semibold font-cabin">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium font-manrope">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            
        </div>
    )
}

export { FeaturesSection }