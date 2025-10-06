import { NextResponse } from "next/server"
import { home7NewArrivals } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home7NewArrivals)
    } catch (error) {
        console.error("Error fetching home-7 new arrivals:", error)
        return NextResponse.json(
            { error: "Failed to fetch home-7 new arrivals" },
            { status: 500 }
        )
    }
}
