import { NextRequest, NextResponse } from "next/server"
import { home6OurProducts } from "@/data"

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const filter = searchParams.get("filter") || "hot"

        // Since only "Hot sale" tab has visible content in HTML, use the same data for all tabs
        const productsByFilter: Record<string, typeof home6OurProducts> = {
            hot: home6OurProducts,
            onsale: home6OurProducts,
            trending: home6OurProducts,
            new: home6OurProducts
        }

        const products = productsByFilter[filter] || productsByFilter.hot

        return NextResponse.json(products)
    } catch (error) {
        console.error("Error fetching our products:", error)
        return NextResponse.json(
            { error: "Failed to fetch our products" },
            { status: 500 }
        )
    }
}
