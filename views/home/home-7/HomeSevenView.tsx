"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "./components"
import { CategoriesSection, TopSellersSection, DiscoverNewArrivalsSection, NewWinterCollectionSection, TestimonialsSection } from "./sections"

const HomeSevenView: React.FC = () => {
    return (
        <div className="body_bg">
            <Header />
            
            <HeroBanner />
            
            <div className="container section-lg space-y-16">
                
                <CategoriesSection />
                
                <TopSellersSection />
                
                <DiscoverNewArrivalsSection />
                
                <NewWinterCollectionSection />
                
                <TestimonialsSection />
                
            </div>
            
            <Footer />
        </div>
    )
}

export default HomeSevenView