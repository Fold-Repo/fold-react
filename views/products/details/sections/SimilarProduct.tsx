"use client";

import React from "react";
import { SwiperCarousel, SwiperSlide } from "@/components/carousel";
import { ProductCard } from "@/components";
import { useGetSimilarProducts } from "@/service";
import { ProductType } from "@/types";
import { ProductSkeleton } from "@/components/skeleton";

interface SimilarProductProps {
    productId: string;
}

const SimilarProduct: React.FC<SimilarProductProps> = ({ productId }) => {

    const { response: similarProducts, isLoading } = useGetSimilarProducts(productId);

    if (!similarProducts && !isLoading) {
        return null;
    }

    return (
        <div className="space-y-6">

            {/* ====== SIMILAR ITEMS HEADER ====== */}
            <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-300">
                Similar Items You Might Like
            </h2>

            {/* ====== SIMILAR PRODUCTS CAROUSEL ====== */}
            <div dir="ltr">
                <SwiperCarousel
                    className="similar-products-swiper"
                    mobile={2}
                    md={3}
                    lg={5}
                    space={10}
                    spaceMd={10}
                    spaceLg={10}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={3000}
                    paginationClass=".sw-pagination-similar">
                    {isLoading ? (
                        Array.from({ length: 5 }).map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <ProductSkeleton />
                            </SwiperSlide>
                        ))
                    ) : (
                        similarProducts.map((product: ProductType) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))
                    )}
                </SwiperCarousel>

                <div className="sw-pagination-similar mt-4 flex gap-2 justify-center"></div>

            </div>

        </div>
    );
};

export default SimilarProduct;