"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { ProductType } from "@/types";

interface ProductImageGalleryProps {
    product: ProductType;
    variant?: "1" | "2" | "3" | "4";
    className?: string;
    onImageSelect?: (image: string) => void;
    selectedColorIndex?: number;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
    product,
    variant = "1",
    className = "",
    onImageSelect,
    selectedColorIndex = -1
}) => {

    const thumbnailImages = (() => {
        const images = [product.image];
        if (product.colors && product.colors.length > 0) {
            product.colors.forEach(color => {
                if (color.image && !images.includes(color.image)) {
                    images.push(color.image);
                }
            });
        }

        return images;
    })();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    useEffect(() => {
        if (!isUserInteracting && selectedColorIndex >= 0 && product.colors && product.colors[selectedColorIndex]) {
            const colorImage = product.colors[selectedColorIndex].image;
            const imageIndex = thumbnailImages.findIndex(img => img === colorImage);
            if (imageIndex !== -1) {
                setCurrentIndex(imageIndex);
            }
        }
    }, [selectedColorIndex, product.colors, thumbnailImages, isUserInteracting]);

    useEffect(() => {
        if (selectedColorIndex !== -1) {
            setIsUserInteracting(false);
        }
    }, [selectedColorIndex]);

    const handleThumbnailClick = (index: number) => {
        setIsUserInteracting(true);
        setCurrentIndex(index);
        if (onImageSelect) {
            onImageSelect(thumbnailImages[index]);
        }
    };

    const handleNextImage = useCallback(() => {
        setIsUserInteracting(true);
        const nextIndex = (currentIndex + 1) % thumbnailImages.length;
        setCurrentIndex(nextIndex);
        if (onImageSelect) {
            onImageSelect(thumbnailImages[nextIndex]);
        }
    }, [currentIndex, thumbnailImages, onImageSelect]);

    const handlePrevImage = useCallback(() => {
        setIsUserInteracting(true);
        const prevIndex = currentIndex === 0 ? thumbnailImages.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        if (onImageSelect) {
            onImageSelect(thumbnailImages[prevIndex]);
        }
    }, [currentIndex, thumbnailImages, onImageSelect]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                handlePrevImage();
            } else if (e.key === "ArrowRight") {
                handleNextImage();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [currentIndex, handleNextImage, handlePrevImage]);

    const NavigationArrows = () => (
        <>
            <button
                onClick={handlePrevImage}
                className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={handleNextImage}
                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </>
    );

    // Thumbnails Component
    const Thumbnails = ({ className = "", direction = "horizontal" }) => (
        <motion.div
            className={`flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2 ${className}`}
            initial={{ opacity: 0, x: direction === "horizontal" ? -20 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}>
            {thumbnailImages.map((image, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: direction === "vertical" ? 5 : 0 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}>
                    <Image
                        src={image}
                        alt={index === 0 ? `${product.name} - Main Image` :
                            (product.colors && product.colors[index - 1] ?
                                `${product.name} - ${product.colors[index - 1].label}` :
                                `Thumbnail ${index + 1}`)}
                        className={`w-16 h-16 lg:w-18 lg:h-18 object-cover rounded-lg cursor-pointer transition 
                            duration-150 flex-shrink-0 ${currentIndex === index ? "ring ring-offset-2 ring-gray-500" : ""
                            }`}
                        width={80}
                        onClick={() => handleThumbnailClick(index)}
                    />
                </motion.div>
            ))}
        </motion.div>
    );

    // Main Image Carousel Component
    const MainImageCarousel = ({ width = 1000 }) => (
        <div className="relative overflow-hidden rounded-xl group">
            <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                {thumbnailImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Image
                            src={image}
                            alt={index === 0 ? `${product.name} - Main Image` :
                                (product.colors && product.colors[index - 1] ?
                                    `${product.name} - ${product.colors[index - 1].label}` :
                                    `${product.name} - Image ${index + 1}`)}
                            className="product-main-image aspect-square w-full h-full object-cover"
                            width={width}
                        />
                    </div>
                ))}
            </motion.div>
            <NavigationArrows />
        </div>
    );

    const renderVariant1 = () => (
        <motion.div
            className={`flex flex-col lg:sticky top-5 h-fit space-y-2 self-start duration-300 transition-all overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <MainImageCarousel width={1000} />
            <Thumbnails />
        </motion.div>
    );

    const renderVariant2 = () => (
        <motion.div
            className={`flex flex-col lg:sticky top-5 h-fit space-y-2 self-start duration-300 transition-all overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Thumbnails />
            <MainImageCarousel width={1000} />
        </motion.div>
    );

    const renderVariant3 = () => (
        <motion.div
            className={`grid lg:grid-cols-[auto_1fr] gap-1 lg:sticky top-5 h-fit self-start duration-300 transition-all ${className}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <Thumbnails className="flex lg:flex-col gap-3 overflow-y-auto max-h-[500px] p-1" direction="vertical" />
            <MainImageCarousel width={1000} />
        </motion.div>
    );

    const renderVariant4 = () => (
        <motion.div
            className={`grid lg:grid-cols-[1fr_auto] gap-2 lg:sticky top-5 h-fit self-start duration-300 transition-all ${className}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <MainImageCarousel width={1000} />

            <Thumbnails className="flex lg:flex-col gap-3 overflow-y-auto p-1" direction="vertical" />
        </motion.div>
    );

    switch (variant) {
        case "1":
            return renderVariant1();
        case "2":
            return renderVariant2();
        case "3":
            return renderVariant3();
        case "4":
            return renderVariant4();
        default:
            return renderVariant1();
    }
};

export default memo(ProductImageGallery);