"use client"

import React, { useState } from "react";
import { Dropdown, DropdownOption } from "./Dropdown";
import { StarIcon, HeartIcon, BookmarkIcon } from "@heroicons/react/24/solid";

export const DropdownExamples: React.FC = () => {

    const [sortValue, setSortValue] = useState("");
    const [, setFilterValue] = useState("");
    const [colorValue, setColorValue] = useState("");

    const sortOptions: DropdownOption[] = [
        { value: "recent", label: "Most Recent" },
        { value: "highest-rated", label: "Highest Rated" },
        { value: "lowest-rated", label: "Lowest Rated" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
    ];

    const filterOptions: DropdownOption[] = [
        { value: "all", label: "All Categories" },
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
        { value: "books", label: "Books" },
        { value: "home", label: "Home & Garden", disabled: true },
    ];

    // Color options matching your HTML design
    const colorOptions: DropdownOption[] = [
        {
            value: "red",
            label: "Red",
            color: "red-500",
            dataAttributes: { "data-color": "/assets/img/products/13.jpg" }
        },
        {
            value: "blue",
            label: "Blue",
            color: "blue-500",
            dataAttributes: { "data-color": "/assets/img/products/14.jpg" }
        },
        {
            value: "green",
            label: "Green",
            color: "green-500",
            dataAttributes: { "data-color": "/assets/img/products/15.jpg" }
        },
        {
            value: "purple",
            label: "Purple",
            color: "purple-500",
            dataAttributes: { "data-color": "/assets/img/products/16.jpg" }
        },
        {
            value: "yellow",
            label: "Yellow",
            color: "yellow-500",
            dataAttributes: { "data-color": "/assets/img/products/17.jpg" }
        },
    ];

    const handleSortChange = (value: string, option: DropdownOption) => {
        setSortValue(value);
        console.log("Sort changed:", value, option);
    };

    const handleFilterChange = (value: string, option: DropdownOption) => {
        setFilterValue(value);
        console.log("Filter changed:", value, option);
    };

    const handleColorChange = (value: string, option: DropdownOption) => {
        setColorValue(value);
        console.log("Color changed:", value, option);
        // You can access the data-color attribute like this:
        const colorImage = option.dataAttributes?.["data-color"];
        console.log("Color image:", colorImage);
    };

    return (
        <div className="space-y-8 p-6">
            <div>
                <h3 className="text-lg font-semibold mb-4">Basic Dropdown (Sort By)</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={sortOptions}
                        value={sortValue}
                        placeholder="Sort By"
                        onChange={handleSortChange}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Dropdown with Default Value</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={filterOptions}
                        defaultValue="all"
                        placeholder="Filter by Category"
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Disabled Dropdown</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={sortOptions}
                        placeholder="Disabled Dropdown"
                        disabled={true}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Different Variants</h3>
                <div className="space-y-4 max-w-xs">
                    <Dropdown
                        options={sortOptions}
                        placeholder="Default Variant"
                        variant="default"
                    />
                    <Dropdown
                        options={sortOptions}
                        placeholder="Outline Variant"
                        variant="outline"
                    />
                    <Dropdown
                        options={sortOptions}
                        placeholder="Ghost Variant"
                        variant="ghost"
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Color Dropdown (Matching Your Design)</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={colorOptions}
                        value={colorValue}
                        placeholder="Select Color"
                        onChange={handleColorChange}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">With Custom Hex Colors</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={[
                            { value: "custom1", label: "Custom Red", color: "#ff6b6b" },
                            { value: "custom2", label: "Custom Blue", color: "#4ecdc4" },
                            { value: "custom3", label: "Custom Green", color: "#45b7d1" },
                        ]}
                        placeholder="Select Custom Color"
                        onChange={(value, option) => console.log("Custom color:", value, option)}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">With Heroicons</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={[
                            {
                                value: "star",
                                label: "Star Rating",
                                icon: <StarIcon className="w-4 h-4 text-yellow-500" />
                            },
                            {
                                value: "heart",
                                label: "Favorite",
                                icon: <HeartIcon className="w-4 h-4 text-red-500" />
                            },
                            {
                                value: "bookmark",
                                label: "Bookmark",
                                icon: <BookmarkIcon className="w-4 h-4 text-blue-500" />
                            },
                        ]}
                        placeholder="Select with Icons"
                        onChange={(value, option) => console.log("Icon selection:", value, option)}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">With Callbacks</h3>
                <div className="max-w-xs">
                    <Dropdown
                        options={sortOptions}
                        placeholder="With Callbacks"
                        onChange={(value, option) => console.log("Changed:", value, option)}
                        onOpen={() => console.log("Dropdown opened")}
                        onClose={() => console.log("Dropdown closed")}
                    />
                </div>
            </div>
        </div>
    );
};

export default DropdownExamples;
