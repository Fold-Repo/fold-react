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

    const product = allProducts.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(product);
}

