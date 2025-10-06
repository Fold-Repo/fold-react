import { NextResponse } from "next/server"
import { home6BestSellerProducts } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home6BestSellerProducts)
    } catch (error) {
        console.error("Error fetching best seller products:", error)
        return NextResponse.json(
            { error: "Failed to fetch best seller products" },
            { status: 500 }
        )
    }
}
