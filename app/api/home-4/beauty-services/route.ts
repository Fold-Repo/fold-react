import { NextResponse } from "next/server"
import { home4BeautyServices } from "@/data/home-4"

export async function GET() {
    try {
        return NextResponse.json(home4BeautyServices)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch beauty services" },
            { status: 500 }
        )
    }
}
