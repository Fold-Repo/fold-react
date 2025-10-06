"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components"

const organicProductsData = [
    {
        id: "organic-1",
        title: "Quality Organic",
        subtitle: "Food Store",
        tag: "100% ORGANIC",
        backgroundImage: "/img/home/2/1.png",
        buttonText: "Order Now",
        href: "/products?category=organic"
    },
    {
        id: "organic-2",
        title: "Healthy Products",
        subtitle: "Everyday",
        tag: "100% ORGANIC",
        backgroundImage: "/img/home/2/2.png",
        buttonText: "Order Now",
        href: "/products?category=healthy"
    }
]

const OrganicProducts: React.FC = () => {
    return (
        <div className="container !max-w-7xl pt-5" data-aos="fade-up" data-aos-delay="100">

            <div className="grid lg:grid-cols-2 gap-5">

                {organicProductsData.map((product) => (
                    <div key={product.id} className="relative w-full h-56 md:h-64 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url('${product.backgroundImage}')` }}>

                        <div className="absolute inset-0 flex flex-col justify-start items-start px-6 py-8 space-y-4">

                            <span className="text-gray-900 text-xs font-medium">
                                {product.tag}
                            </span>

                            <h2 className="text-white text-2xl md:text-3xl font-cabin font-medium">
                                {product.title} <br /> {product.subtitle}
                            </h2>

                            <Link href={product.href}>
                                <Button variant="outline" className="!border-white !px-6 mt-2">
                                    {product.buttonText}
                                </Button>
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export { OrganicProducts }
