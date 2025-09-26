"use client";

import React from "react";
import { cn } from "@/lib";
import { useQueryParams } from "@/hooks/useQueryParams";
import GridSwitcher from "../reusable/GridSwitcher";
import { Dropdown } from "@/components";
import type { DropdownOption } from "@/components/ui/dropdown";

interface ProductTopBarProps {
    totalProducts?: number;
    currentPage?: number;
    productsPerPage?: number;
    className?: string;
}

const ProductTopBar: React.FC<ProductTopBarProps> = ({
    totalProducts = 76,
    currentPage = 1,
    productsPerPage = 9,
    className,
}) => {
    const { searchParams, updateQueryParams } = useQueryParams();

    const selectedGrid = searchParams.get("grid") || "4";
    const sortValue = searchParams.get("sort") || "";

    const startItem = (currentPage - 1) * productsPerPage + 1;
    const endItem = Math.min(currentPage * productsPerPage, totalProducts);

    const sortOptions: DropdownOption[] = [
        { value: "popularity", label: "Popularity" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "rating", label: "Ratings" },
        { value: "newest", label: "Newest" },
        { value: "oldest", label: "Oldest" },
    ];

    const handleGridChange = (grid: string) => {
        updateQueryParams({ grid });
    };

    const handleSortChange = (value: string) => {
        updateQueryParams({ sort: value });
    };

    return (
        <div className={cn(
            "flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-b border-gray-300 pb-3",
            className
        )}>
            {/* ================= PRODUCT COUNT ================= */}
            <p className="text-gray-500 text-sm">
                Showing {startItem} - {endItem} of {totalProducts} products
            </p>

            {/* ================= GRID SWITCHER ================= */}
            <GridSwitcher
                selected={selectedGrid}
                onSelect={handleGridChange}
            />

            {/* ================= SORT DROPDOWN ================= */}
            <div className="inline-flex items-center gap-x-3">
                <span className="text-gray-500 text-sm">Sort By:</span>
                <Dropdown
                    options={sortOptions}
                    value={sortValue}
                    placeholder="Sort by"
                    onChange={handleSortChange}
                    className="min-w-[140px]"
                />
            </div>

        </div>
    );
};

export default ProductTopBar;
