import { NextResponse } from "next/server"
import { home3SpecialProducts } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home3SpecialProducts)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch special products" },
            { status: 500 }
        )
    }
}
