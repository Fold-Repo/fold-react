"use client"

import React from "react"
import { HeroBanner } from "./components"
import { Stats, Collections, FlashSales, DealsYouCantMiss, SpecialProducts, ShopByRoom, ReadyToRedecorate } from "./sections"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const HomeThreeView: React.FC = () => {
    return (
        <div className="body_bg">

            <Header />

            {/* ================= HERO BANNER ================= */}
            <HeroBanner />

            <div className="section-md space-y-12">

                {/* ================= STATS ================= */}
                <Stats />

                {/* ================= COLLECTIONS ================= */}
                <Collections />

                {/* ================= FLASH SALES ================= */}
                <FlashSales />

                {/* ================= DEALS YOU CAN'T MISS ================= */}
                <DealsYouCantMiss />

                {/* ================= SPECIAL PRODUCTS ================= */}
                <SpecialProducts />

                {/* ================= SHOP BY ROOM ================= */}
                <ShopByRoom />

            </div>

            {/* ================= READY TO REDECORATE ================= */}
            <ReadyToRedecorate />

            <Footer />

        </div>
    )
}

export default HomeThreeView