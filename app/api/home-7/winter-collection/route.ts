import { NextResponse } from "next/server"
import { home7WinterCollection } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home7WinterCollection)
    } catch (error) {
        console.error("Error fetching home-7 winter collection:", error)
        return NextResponse.json(
            { error: "Failed to fetch home-7 winter collection" },
            { status: 500 }
        )
    }
}
