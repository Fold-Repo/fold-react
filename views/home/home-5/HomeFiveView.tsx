"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "./components"
import { FeaturesSection, CategoriesSection, FlashSalesSection, ExploreCollectionSection, TestimonialsSection } from "./sections"

const HomeFiveView: React.FC = () => {
    return (
        <div className="body_bg">

            <Header />
            
                <HeroBanner />
                
                <FeaturesSection />

                <div className="container section-lg space-y-12">
                    
                    <CategoriesSection />

                    <FlashSalesSection />

                    <ExploreCollectionSection />

                </div>

                <TestimonialsSection />

            <Footer />
            
        </div>
    )
}

export default HomeFiveView