"use client"

import React from "react"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {HeroBanner} from "./components"
import {Collections, TrendingProducts, PopularProducts, GetDiscount} from "./sections"

const HomeView: React.FC = () => {
    return (
        <div className="body_bg">

            <Header />
            
            <HeroBanner />
            
            <div className="container section-md space-y-8">

                <Collections />
                
                <TrendingProducts />
                
                <PopularProducts />
                
            </div>
            
            <GetDiscount />
            
            <Footer />

        </div>
    )
}

export default HomeView
