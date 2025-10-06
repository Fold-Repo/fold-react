"use client"

import React from "react"

// Stats data
const statsData = [
    {
        id: 1,
        number: "10K+",
        description: "Each place we sell is crafted with care, quality, and timeless design making over."
    },
    {
        id: 2,
        number: "10K+",
        description: "We don't just sell furniture — we help bring your vision to life."
    },
    {
        id: 3,
        number: "10K+",
        description: "With a decade of experience in modern furniture."
    }
]

const Stats: React.FC = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-10" data-aos="fade-up" data-aos-delay="100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                    {statsData.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center gap-y-5 max-w-xs mx-auto" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
                                {stat.number}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                {stat.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export { Stats }
