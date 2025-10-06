import { NextRequest, NextResponse } from "next/server";
import { products, home1TrendingProducts, home1PopularProducts, home1CollectionsProducts, home2BestCategoriesProducts, home2PopularProducts, home3DealsProducts, home3SpecialProducts } from "@/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  // Combine all products including home-1 and home-2 products
  const allProducts = [
    ...products,
    ...home1TrendingProducts,
    ...home1PopularProducts,
    ...home1CollectionsProducts,
    ...home2BestCategoriesProducts,
    ...home2PopularProducts,
    ...home3DealsProducts,
    ...home3SpecialProducts
  ];

  // Find the current product
  const currentProduct = allProducts.find(p => p.id === id);

  if (!currentProduct) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  // Get similar products based on category, excluding current product
  const similarProducts = allProducts
    .filter(p => p.id !== id && p.category === currentProduct.category)
    .slice(0, 5); // Limit to 5 similar products


  if (similarProducts.length < 5) {
    const remainingProducts = allProducts
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

