"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { VendorType } from "@/types"
import { Button, RatingStars } from "@/components"
import { MapPinIcon } from "@heroicons/react/24/outline"

interface ServiceCardTwoProps {
    vendor: VendorType
}

const ServiceCardTwo: React.FC<ServiceCardTwoProps> = ({ vendor }) => {
    return (
        <div className="relative p-1.5 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col">
            
            <Image className="w-full aspect-9/8 object-cover object-top rounded-lg"
                src={vendor.image}  alt={vendor.name}
                width={300} height={267}
            />

            <div className="space-y-2 pt-3">
                
                <div className="flex items-center flex-wrap justify-between gap-2">

                    <Link  href="#"  className="text-gray-700 dark:text-gray-200 text-base font-bold hover:text-brand !line-clamp-1 md:!line-clamp-2">
                        {vendor.salonName}
                    </Link>

                    <div className="flex items-center gap-2">
                        <RatingStars rating={vendor.rating} variant="compact" showCount={true} 
                            count={vendor.ratingCount} size="sm"
                        />
                    </div>

                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">

                    <MapPinIcon className="size-5" />

                    <span className="text-sm">
                        {vendor.location}
                    </span>

                </div>

                <Button size="sm" variant="outline-brand" className="w-full mt-3">
                    Book Now
                </Button>

            </div>

        </div>
    )
}

export { ServiceCardTwo }
