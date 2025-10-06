import { NextResponse } from "next/server"
import { home6NewCollectionProducts } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home6NewCollectionProducts)
    } catch (error) {
        console.error("Error fetching new collection products:", error)
        return NextResponse.json(
            { error: "Failed to fetch new collection products" },
            { status: 500 }
        )
    }
}
