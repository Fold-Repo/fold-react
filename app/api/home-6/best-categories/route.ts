import { NextResponse } from "next/server"
import { home6BestCategories } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home6BestCategories)
    } catch (error) {
        console.error("Error fetching best categories:", error)
        return NextResponse.json(
            { error: "Failed to fetch best categories" },
            { status: 500 }
        )
    }
}
