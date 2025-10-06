"use client"

import React from "react"
import Image from "next/image"

const FeaturesSection: React.FC = () => {
    
    const featuresData = [
        {
            id: "1",
            title: "Free shipping",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "/icon/express.png",
            alt: "Free shipping"
        },
        {
            id: "2", 
            title: "Support 24/7",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "/icon/support.png",
            alt: "Support 24/7"
        },
        {
            id: "3",
            title: "30 Days return", 
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "/icon/return.png",
            alt: "30 Days return"
        },
        {
            id: "4",
            title: "100% Payment secure",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "/icon/secure.png",
            alt: "100% Payment secure"
        }
    ]

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-6" data-aos="fade-up" data-aos-delay="100">
            
            <div className="container">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 text-left">
                    
                    {featuresData.map((feature, index) => (
                        <div key={feature.id} className="flex items-start p-4 gap-4" data-aos="fade-up" data-aos-delay={`${200 + (index * 100)}`}>
                            
                            <Image
                                src={feature.icon}
                                alt={feature.alt}
                                width={40}
                                height={40}
                                className="w-10 object-contain"
                            />
                            
                            <div className="space-y-1">
                                <h3 className="text-black dark:text-gray-100 text-base font-semibold font-cabin">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-300 text-sm">
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
