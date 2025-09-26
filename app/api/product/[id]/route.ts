import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {

    const { id } = await params;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(product);
}

