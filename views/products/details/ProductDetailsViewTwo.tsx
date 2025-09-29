"use client";

import React, { useState, useCallback, memo } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProductImageGallery, Button, RatingStars, ColorSwatch, QuantitySelector, ProductDeliveryInfo, ProductSpecifications, Breadcrumb, ProductDetailsSkeleton, WishlistButton } from "@/components"
import { formatCurrency } from "@/lib"
import { ShoppingCartIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useGetProductById } from "@/service";
import { notFound } from "next/navigation";
import { ProductColor } from "@/types";
import { SimilarProduct, ProductReviews } from "./sections";
import { useCart } from "@/store";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { addToCartWithHelper } from "@/utils/helper";


const ProductDetailsViewTwo = ({ productId }: { productId: string }) => {

    const { response: product, isLoading } = useGetProductById(productId)
    const { addItem } = useCart()
    const router = useRouter()
    const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null)
    const [selectedColorIndex, setSelectedColorIndex] = useState(-1)
    const [quantity, setQuantity] = useState(1)

    const handleColorChange = useCallback((colorOption: any, index?: number) => {
        setSelectedColor(colorOption)
        if (index !== undefined) {
            setSelectedColorIndex(index)
        }
    }, [])

    const handleQuantityChange = useCallback((newQuantity: number) => {
        setQuantity(newQuantity)
    }, [])

    const handleImageSelect = useCallback((image: string) => {
        const colors = (product as any)?.colors;
        const matchedColor = colors?.find((color: any) => color.image === image);
        if (matchedColor) {
            const colorIndex = colors?.findIndex((color: any) => color.image === image);
            if (colorIndex !== undefined && colorIndex !== -1) {
                setSelectedColor(matchedColor);
                setSelectedColorIndex(colorIndex);
            }
        } else {
            setSelectedColor(null);
            setSelectedColorIndex(-1);
        }
    }, [product])

    const handleAddToCart = () => {
        addToCartWithHelper(
            addItem,
            product,
            quantity,
            selectedColor,
            toast.success
        );
    }

    const handleBuyNow = () => {
        addToCartWithHelper(
            addItem,
            product,
            quantity,
            selectedColor,
            toast.success,
            router.push,
            true 
        );
    }

    if (!product && !isLoading) {
        return notFound()
    }

    return (
        <>

            <Header />

            {isLoading ? (

                <ProductDetailsSkeleton showReviews={true} />

            ) : (

                <>

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Products", href: "/products" },
                            { label: product.category, href: `/products?category=${product.category.toLowerCase()}` },
                            { label: product.name, isActive: true }
                        ]}
                        variant="center"
                    />

                    <div className="section-lg container space-y-12">

                        <div className="grid lg:grid-cols-2 gap-10">

                            <ProductImageGallery
                                variant='2'
                                product={product}
                                selectedColorIndex={selectedColorIndex}
                                onImageSelect={handleImageSelect}
                            />

                            {/* ============ PRODUCT DETAILS ============ */}
                            <div className="py-2 space-y-6 overflow-hidden">

                                {/* ====== TITLE ====== */}
                                <h2 className="text-lg xl:text-xl font-semibold text-gray-900 dark:text-gray-300">
                                    {product.name}
                                </h2>

                                {/* ====== DESC ====== */}
                                {product.description && (
                                    <p className="max-w-7xl text-sm md:text-base text-gray-500 dark:text-gray-400 leading-6">
                                        {product.description}
                                    </p>
                                )}

                                {/* ====== RATING ====== */}
                                <div className="flex items-center gap-2 text-xs">
                                    <RatingStars rating={product.rating} count={product.ratingCount} size="lg" />
                                    <span className="text-gray-700 dark:text-gray-400">(2,847 reviews)</span>
                                </div>

                                {/* ====== PRICING ====== */}
                                <div className="flex items-end gap-4 font-inter">

                                    <h2 className="font-semibold text-lg text-red-600 dark:text-red-400">
                                        {formatCurrency(product.price)}
                                    </h2>

                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <>
                                            <h4 className="text-sm text-gray-500 line-through">
                                                {formatCurrency(product.originalPrice)}
                                            </h4>
                                            <p className="text-xs text-green-600 dark:text-green-400 font-light">
                                                Save {formatCurrency(product.originalPrice - product.price)}
                                                ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                                            </p>
                                        </>
                                    )}

                                </div>

                                {/* ====== COLOR ====== */}
                                {product.colors && product.colors.length > 0 && (
                                    <ColorSwatch
                                        options={product.colors.map((color: ProductColor) => ({
                                            color: color.color,
                                            image: color.image,
                                            label: color.label
                                        }))}
                                        onColorChange={handleColorChange}
                                        variant="label"
                                        trigger="click"
                                        selectedIndex={selectedColorIndex}
                                    />
                                )}

                                {/* ====== QUANTITY ====== */}
                                <div className="flex items-center gap-4">
                                    <QuantitySelector initialValue={1} onQuantityChange={handleQuantityChange}
                                        inStock={product.inStock} size="sm" />

                                    {/* Stock Status */}
                                    <div className={`flex items-center gap-2 font-medium text-xs ${product.inStock
                                        ? "text-green-600 dark:text-green-400"
                                        : "text-red-600 dark:text-red-400"
                                        }`}>
                                        {product.inStock ? (
                                            <>
                                                <CheckIcon className="size-4" />
                                                <span>In stock</span>
                                            </>
                                        ) : (
                                            <>
                                                <XMarkIcon className="size-4" />
                                                <span>Out of stock</span>
                                            </>
                                        )}
                                    </div>

                                </div>

                                {/* ====== ACTION BUTTONS ====== */}
                                <div className="flex items-center gap-3">

                                    <Button variant="brand" size="lg" fullWidth leftIcon={<ShoppingCartIcon className="w-5 h-5" />} onClick={handleAddToCart} disabled={!product.inStock} rounded="lg">
                                        Add to Cart
                                    </Button>

                                    <div className="inline-flex items-center gap-3 w-full">

                                        <Button variant="outline-brand" size="lg" fullWidth onClick={handleBuyNow} disabled={!product.inStock} rounded="lg">
                                            Buy Now
                                        </Button>

                                        <WishlistButton size="lg" product={product} />

                                    </div>

                                </div>

                                <ProductDeliveryInfo
                                    isFreeDelivery={product.isFreeDelivery}
                                    deliveryDate="Monday, 27th December"
                                />

                                {/* ====== REVIEWS ====== */}
                                <ProductReviews productId={productId} />

                            </div>

                        </div>

                        {/* ================= PRODUCT SPECIFICATION ================= */}
                        <ProductSpecifications specifications={product.specifications} />

                        {/* ================= SIMILAR PRODUCT ================= */}
                        <SimilarProduct productId={productId} />

                    </div>

                </>

            )}

            <Footer />

        </>
    )
}

export default memo(ProductDetailsViewTwo)
