"use client"

import React from "react"
import { ProductCardThree, CollectionCard } from "@/components/cards"
import { Button } from "@/components"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { useGetHome1Collections, useGetHome1CollectionsProducts } from "@/service"
import { CollectionType, ProductType } from "@/types"
import { CollectionsSkeleton } from "@/components/skeleton"

const Collections: React.FC = () => {
    
    const { data: collectionsData, isLoading: collectionsLoading } = useGetHome1Collections()
    const { data: productsData, isLoading: productsLoading } = useGetHome1CollectionsProducts()

    const collections: CollectionType[] = collectionsData?.data || []
    const products: ProductType[] = productsData?.data || []

    if (collectionsLoading || productsLoading) {
        return <CollectionsSkeleton />
    }

    return (
        <>
            {/* ================= COLLECTIONS ================= */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="50">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                    <div className="bg-black dark:bg-gray-800 rounded-xl p-8 md:col-span-7">

                        <p className="text-white text-xl md:text-2xl md:leading-9 font-medium pb-10">
                            See all our Features collection <br /> you will love
                        </p>

                        <Button variant="brand" size="sm" className="uppercase !px-5 !text-[11px]"
                            rightIcon={<ArrowUpRightIcon className="w-4 h-4" />}>
                            See all Collection
                        </Button>

                    </div>

                    {collections[0] && (
                        <CollectionCard
                            collection={collections[0]}
                            size="large"
                            className="md:col-span-5"
                        />
                    )}

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="150">
                    {collections.slice(1).map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} size="small" />
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">

                    {products.map((product) => (
                        <ProductCardThree key={product.id} product={product} />
                    ))}

                </div>

            </div>
        </>
    )
}

export { Collections }