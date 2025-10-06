"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "./components"
import { ExperienceMakingBeauty, RecommendedServices, ExclusiveProducts, Testimonials } from "./sections"

const HomeFourView: React.FC = () => {
    return (
        <div className="body_bg">

            <Header />

            <HeroBanner />

            <div className="section-lg space-y-12">
                
                <ExperienceMakingBeauty />
                
                <RecommendedServices />

            </div>

            <ExclusiveProducts />

            <Testimonials />

            <Footer />

        </div>
    )
}

export default HomeFourView