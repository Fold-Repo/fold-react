import { NextResponse } from "next/server"
import { home3DealsProducts } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home3DealsProducts)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch deals products" },
            { status: 500 }
        )
    }
}
