import { NextResponse } from "next/server";
import { home1CollectionsProducts } from "@/data";

export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: home1CollectionsProducts
        });
    } catch {
        return NextResponse.json(
            { success: false, error: "Failed to fetch collections products" },
            { status: 500 }
        );
    }
}
