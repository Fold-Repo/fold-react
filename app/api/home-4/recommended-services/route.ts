import { NextResponse } from "next/server"
import { home4RecommendedVendors } from "@/data/home-4"

export async function GET() {
    try {
        return NextResponse.json(home4RecommendedVendors)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch recommended services" },
            { status: 500 }
        )
    }
}
