"use client";

import React from "react";
import RatingStars from "./RatingStars";

const RatingStarsExample: React.FC = () => {
    return (
        <div className="space-y-6 p-6">
            <h2 className="text-xl font-semibold">RatingStars Component Examples</h2>
            
            {/* ================= DISPLAY VARIANT ================= */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Display Variant (Default)</h3>
                <div className="space-y-2">
                    <RatingStars rating={4.5} showCount={true} count={95} />
                    <RatingStars rating={3} showCount={true} count={42} />
                    <RatingStars rating={5} showCount={false} />
                </div>
            </div>

            {/* ================= FILTER VARIANT ================= */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Filter Variant</h3>
                <div className="space-y-2">
                    <RatingStars rating={5} variant="filter" />
                    <RatingStars rating={4} variant="filter" />
                    <RatingStars rating={3} variant="filter" />
                    <RatingStars rating={2} variant="filter" />
                    <RatingStars rating={1} variant="filter" />
                </div>
            </div>

            {/* ================= SINGLE VARIANT ================= */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Single Variant</h3>
                <div className="space-y-2">
                    <RatingStars rating={1} variant="single" showCount={true} count={95} />
                    <RatingStars rating={1} variant="single" showCount={true} count={42} />
                    <RatingStars rating={1} variant="single" showCount={false} />
                </div>
            </div>

            {/* ================= SIZE VARIANTS ================= */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Size Variants</h3>
                <div className="space-y-2">
                    <RatingStars rating={4} size="sm" showCount={true} count={95} />
                    <RatingStars rating={4} size="md" showCount={true} count={95} />
                    <RatingStars rating={4} size="lg" showCount={true} count={95} />
                </div>
            </div>
        </div>
    );
};

export default RatingStarsExample;
