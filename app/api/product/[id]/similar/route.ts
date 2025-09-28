import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  // Find the current product
  const currentProduct = products.find(p => p.id === id);

  if (!currentProduct) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  // Get similar products based on category, excluding current product
  const similarProducts = products
    .filter(p => p.id !== id && p.category === currentProduct.category)
    .slice(0, 5); // Limit to 5 similar products


  if (similarProducts.length < 5) {
    const remainingProducts = products
      .filter(p => p.id !== id && !similarProducts.some(sp => sp.id === p.id))
      .slice(0, 5 - similarProducts.length);

    similarProducts.push(...remainingProducts);
  }

  return NextResponse.json({
    success: true,
    data: similarProducts,
    meta: {
      total: similarProducts.length,
      productId: id,
      category: currentProduct.category
    }
  });

}

