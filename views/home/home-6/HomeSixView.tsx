"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "./components"
import { BestCategoriesSection, NewCollectionSection, BestSellerProductsSection, OurProductSection, DealOfTheDaySection } from "./sections"

const HomeSixView: React.FC = () => {
    return (
        <div className="body_bg">

            <Header />
            
            <HeroBanner />
            
            <div className="container section-lg space-y-12">
                
                <BestCategoriesSection />
                
                <NewCollectionSection />
                
                <BestSellerProductsSection />
                
                <OurProductSection />
                
            </div>
            
            <DealOfTheDaySection />
            
            <Footer />
            
        </div>
    )
}

export default HomeSixView
