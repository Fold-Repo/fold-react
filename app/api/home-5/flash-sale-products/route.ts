import { NextResponse } from "next/server"
import { home5FlashSaleProducts } from "@/data"

export async function GET() {
    try {
        return NextResponse.json(home5FlashSaleProducts)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch flash sale products" },
            { status: 500 }
        )
    }
}
