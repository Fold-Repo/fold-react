import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/product";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const product = products.find(p => p.id === id);

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  const reviews = product.reviews || [];

  return NextResponse.json({
    success: true,
    data: reviews,
    meta: {
      total: reviews.length,
      productId: id
    }
  });


}

