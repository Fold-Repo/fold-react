"use client";

import React from "react";
import { cn } from "@/lib";
import { useQueryParams } from "@/hooks/useQueryParams";
import { Accordion, AccordionItem } from "@/components";
import RatingStars from "@/components/reusable/RatingStars";
import { ProductMetaSummary } from "@/types";

interface ProductFilterBarProps {
    className?: string;
    meta?: ProductMetaSummary;
}

const ProductFilterBar: React.FC<ProductFilterBarProps> = ({ className, meta }) => {

    const { searchParams, updateQueryParams } = useQueryParams();
    
    const selectedCategory = searchParams.get("category") || "";
    const selectedRating = searchParams.get("rating") || "";
    const selectedBrand = searchParams.get("brand") || "";
    const selectedAvailability = searchParams.get("availability")?.split(",") || [];
    const minPrice = searchParams.get("minPrice") || (meta?.priceRange?.min?.toString() || "0");
    const maxPrice = searchParams.get("maxPrice") || (meta?.priceRange?.max?.toString() || "1000");

    // Use meta data or fallback to empty arrays
    const categories = meta?.categories?.map(cat => ({
        value: cat.name.toLowerCase().replace(/\s+/g, "-"),
        label: cat.name,
        count: cat.count
    })) || [];

    // Static rating options (1-5 stars)
    const ratings = [
        { value: "5", stars: 5 },
        { value: "4", stars: 4 },
        { value: "3", stars: 3 },
        { value: "2", stars: 2 },
        { value: "1", stars: 1 },
    ];

    const brands = meta?.brands?.map(brand => ({
        value: brand.name.toLowerCase().replace(/\s+/g, "-"),
        label: brand.name,
        count: brand.count
    })) || [];

    // Availability options (static for now)
    const availability = [
        { value: "in-stock", label: "In Stock" },
        { value: "out-of-stock", label: "Out of Stock" },
    ];

    // Handle checkbox changes (for single selection filters like category/brand)
    const handleCheckboxChange = (type: string, value: string, checked: boolean) => {
        if (checked) {
            updateQueryParams({ [type]: value });
        } else {
            updateQueryParams({ [type]: null });
        }
    };

    // Handle availability checkbox changes (multiple selection)
    const handleAvailabilityChange = (value: string, checked: boolean) => {
        let newAvailability = [...selectedAvailability];
        if (checked) {
            if (!newAvailability.includes(value)) {
                newAvailability.push(value);
            }
        } else {
            newAvailability = newAvailability.filter(item => item !== value);
        }
        updateQueryParams({ 
            availability: newAvailability.length > 0 ? newAvailability.join(",") : null 
        });
    };

    // Handle radio changes (for rating)
    const handleRadioChange = (type: string, value: string) => {
        updateQueryParams({ [type]: value });
    };

    // Handle price range changes
    const handlePriceChange = (type: "minPrice" | "maxPrice", value: string) => {
        updateQueryParams({ [type]: value || null });
    };

    return (
        <div className={cn("space-y-8", className)}>
            
            {/* ================= FILTER TITLE ================= */}
            <h2 className="text-left text-base font-semibold border-b border-gray-300 pb-3">
                Lifestyle
            </h2>

            {/* ================= FILTER CONTAINER ================= */}
            <div className="bg-white dark:bg-gray-800 rounded-xl px-5 py-2 sticky top-4 z-10">

                <Accordion exclusive={false}>
                    
                    {/* ================= CATEGORY FILTER ================= */}
                    <AccordionItem title="Category" defaultOpen={true}>
                        {categories.map((category) => (
                            <div key={category.value} className="flex items-center justify-between gap-3">
                                <div className="flex gap-2 shrink-0 items-center">
                                    <input
                                        id={`filter-category-${category.value}`}
                                        type="checkbox"
                                        value={category.value}
                                        checked={selectedCategory === category.value}
                                        onChange={(e) => handleCheckboxChange("category", category.value, e.target.checked)}
                                        className="size-4 appearance-none rounded-sm border border-gray-300 bg-white checked:border-brand checked:bg-brand"
                                    />
                                    <label
                                        htmlFor={`filter-category-${category.value}`}
                                        className="text-gray-600 text-[13px] cursor-pointer">
                                        {category.label}
                                    </label>
                                </div>
                                <span className="text-gray-600 text-[13px]">({category.count})</span>
                            </div>
                        ))}
                    </AccordionItem>

                    {/* ================= RATING FILTER ================= */}
                    <AccordionItem title="Rating" defaultOpen={true}>
                        {ratings.map((rating) => (
                            <div key={rating.value} className="flex items-center gap-2">
                                <input
                                    id={`filter-rating-${rating.value}`}
                                    type="radio"
                                    name="rating"
                                    value={rating.value}
                                    checked={selectedRating === rating.value}
                                    onChange={() => handleRadioChange("rating", rating.value)}
                                    className="size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-brand checked:bg-brand"
                                />
                                <label
                                    htmlFor={`filter-rating-${rating.value}`}
                                    className="text-gray-600 text-[13px] cursor-pointer flex items-center gap-1">
                                    <RatingStars 
                                        rating={rating.stars} 
                                        variant="filter" 
                                        size="sm"
                                    />
                                </label>
                            </div>
                        ))}
                    </AccordionItem>

                    {/* ================= PRICE RANGE FILTER ================= */}
                    <AccordionItem title="Price Range">
                        <div className="flex items-center gap-3">
                            <div>
                                <label className="form-label !text-xs">Min</label>
                                <input
                                    type="number"
                                    value={minPrice}
                                    onChange={(e) => handlePriceChange("minPrice", e.target.value)}
                                    className="form-control h-10"
                                    placeholder="100"
                                />
                            </div>
                            <span>-</span>
                            <div>
                                <label className="form-label !text-xs">Max</label>
                                <input
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
                                    className="form-control h-10"
                                    placeholder="100000"
                                />
                            </div>
                        </div>
                    </AccordionItem>

                    {/* ================= BRAND FILTER ================= */}
                    <AccordionItem title="Brand">
                        {brands.map((brand) => (
                            <div key={brand.value} className="flex items-center justify-between gap-3">
                                <div className="flex gap-2 items-center">
                                    <input
                                        id={`filter-brand-${brand.value}`}
                                        type="checkbox"
                                        value={brand.value}
                                        checked={selectedBrand === brand.value}
                                        onChange={(e) => handleCheckboxChange("brand", brand.value, e.target.checked)}
                                        className="size-4 appearance-none rounded-sm border border-gray-300 bg-white checked:border-brand checked:bg-brand"
                                    />
                                    <label
                                        htmlFor={`filter-brand-${brand.value}`}
                                        className="text-gray-600 text-[13px] cursor-pointer">
                                        {brand.label}
                                    </label>
                                </div>
                                <span className="text-gray-600 text-[13px]">({brand.count})</span>
                            </div>
                        ))}
                    </AccordionItem>

                    {/* ================= AVAILABILITY FILTER ================= */}
                    <AccordionItem title="Availability">
                        {availability.map((item) => (
                            <div key={item.value} className="flex items-center gap-2">
                                <input
                                    id={`filter-availability-${item.value}`}
                                    type="checkbox"
                                    value={item.value}
                                    checked={selectedAvailability.includes(item.value)}
                                    onChange={(e) => handleAvailabilityChange(item.value, e.target.checked)}
                                    className="size-4 appearance-none rounded-sm border border-gray-300 bg-white checked:border-brand checked:bg-brand"
                                />
                                <label
                                    htmlFor={`filter-availability-${item.value}`}
                                    className="text-gray-600 text-[13px] cursor-pointer"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </AccordionItem>
                    
                </Accordion>

            </div>
        </div>
    );
};

export default ProductFilterBar;
