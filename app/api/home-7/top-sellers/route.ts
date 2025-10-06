import { NextResponse } from "next/server"
import { home7TopSellers } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home7TopSellers)
    } catch (error) {
        console.error("Error fetching home-7 top sellers:", error)
        return NextResponse.json(
            { error: "Failed to fetch home-7 top sellers" },
            { status: 500 }
        )
    }
}
