import { NextResponse } from "next/server";
import { home1PopularProducts } from "@/data";

export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: home1PopularProducts
        });
    } catch {
        return NextResponse.json(
            { success: false, error: "Failed to fetch popular products" },
            { status: 500 }
        );
    }
}
