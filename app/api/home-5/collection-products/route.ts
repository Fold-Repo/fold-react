import { NextResponse } from "next/server"
import { home5CollectionProducts } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home5CollectionProducts)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch collection products" },
            { status: 500 }
        )
    }
}
