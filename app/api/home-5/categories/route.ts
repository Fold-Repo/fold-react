import { NextResponse } from "next/server"
import { home5Categories } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home5Categories)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch categories" },
            { status: 500 }
        )
    }
}
