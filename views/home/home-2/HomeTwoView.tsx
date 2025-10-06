"use client"

import React from "react"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import { HeroBanner } from "./components"
import { BestCategories, OrganicProducts, HealthyBanner, PopularProducts, NewsArticles } from "./sections"

const HomeTwoView: React.FC = () => {
    return (
        <div className="body_bg">

            <Header />
            
            {/* ================= HERO BANNER ================= */}
            <HeroBanner />
            
            {/* ================= MAIN CONTENT ================= */}
            <div className="section-lg space-y-12">
                
                {/* ================= BEST CATEGORIES ================= */}
                <BestCategories />
                
                {/* ================= ORGANIC / HEALTHY PRODUCTS ================= */}
                <OrganicProducts />
                
                {/* ================= BE HEALTHY / EAT FRESH ================= */}
                <HealthyBanner />
                
                {/* ================= POPULAR PRODUCTS ================= */}
                <PopularProducts />
                
                {/* ================= NEWS & ARTICLES ================= */}
                <NewsArticles />
                
            </div>
            
            <Footer />
            
        </div>
    )
}

export default HomeTwoView
