"use client"

import React from "react"
import Image from "next/image"
import { ServiceType } from "@/types"
import { Button } from "@/components"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { formatCurrency } from "@/lib"
import Link from "next/link"

interface ServiceCardProps {
    service: ServiceType
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="flex flex-col justify-center bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden py-3 pl-5 pr-3">

            <div className="relative">

                <div className="absolute inset-0 bg-violet-300 rounded-lg -translate-x-2 translate-y-2"></div>

                <Image
                    src={service.image}
                    alt={service.name}
                    width={300}
                    height={200}
                    className="relative w-full aspect-9/6 object-cover rounded-lg"
                />

            </div>

            <div className="flex flex-col gap-2 pt-6">

                <Link href="#" className="text-base font-semibold text-gray-900 dark:text-white hover:!text-brand hover:underline">
                    {service.name}
                </Link>

                <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-400 font-inter">
                    {formatCurrency(service.price)}
                </p>

            </div>

            <div className="border-t border-gray-300 pt-3 mt-3">
                <Button size="sm" variant="outline-brand" className="h-10 !px-4">
                    Order now
                    <ArrowUpRightIcon className="size-3" />
                </Button>
            </div>

        </div>
    )
}

export { ServiceCard }
