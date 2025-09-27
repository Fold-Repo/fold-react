"use client"

import { Breadcrumb, Pagination, ProductFilterBar, ProductLayout, 
    ProductTopBar, ResponsiveGrid, ProductCard, ProductCardTwo } from "@/components"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { useQueryParams } from "@/hooks"
import { useProductsQuery, useGetProductMetas } from "@/service"
import { ProductCardSkeleton, ProductFilterSkeleton, ProductCardTwoSkeleton } from "@/components/skeleton"
import React from "react"
import { ProductType } from "@/types"

const ProductsView = () => {

    const { searchParams } = useQueryParams()
    const grid = searchParams.get("grid") || "4"

    const { response: productMeta, isLoading: metaLoading } = useGetProductMetas()

    const { products, currentPage, totalItems, limit, isLoading: productsLoading } = useProductsQuery({
        page: 1,
        limit: 8
    })

    return (
        <>

            <Header />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Products", isActive: true }
                ]}
                separator={<span className="text-gray-400">/</span>}
                variant='left'
            />

            <div className="container section-lg">

                <ProductLayout

                    left={
                        metaLoading ? (
                            <ProductFilterSkeleton />
                        ) : (
                            <ProductFilterBar meta={productMeta} />
                        )
                    }

                    right={
                        <>

                            <ProductTopBar 
                                totalProducts={totalItems || 0} 
                                currentPage={currentPage || 1} 
                                productsPerPage={limit || 1} 
                            />

                            {productsLoading ? (
                                grid === "1" ? (
                                    <div className="space-y-6">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <ProductCardTwoSkeleton key={index} />
                                        ))}
                                    </div>
                                ) : (
                                    <ResponsiveGrid columns={grid}>
                                        <ProductCardSkeleton count={12} />
                                    </ResponsiveGrid>
                                )
                            ) : (
                                grid === "1" ? (
                                    <div className="space-y-6">
                                        {products?.map((product: ProductType, index: number) => (
                                            <ProductCardTwo key={index} product={product} />
                                        ))}
                                    </div>
                                ) : (
                                    <ResponsiveGrid columns={grid}>
                                        {products?.map((product: ProductType, index: number) => (
                                            <ProductCard key={index} product={product} />
                                        ))}
                                    </ResponsiveGrid>
                                )
                            )}

                            <Pagination  className='justify-center mt-10'  initialPage={currentPage || 1} 
                            total={totalItems || 0} perPage={limit || 1}  />

                        </>
                    }

                />

            </div>

            <Footer />

        </>
    )
}

export default ProductsView