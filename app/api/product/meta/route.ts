import { NextResponse } from "next/server";
import { products } from "@/data";
import { home1TrendingProducts, home1PopularProducts, home1CollectionsProducts } from "@/data/home-1";
import { home2BestCategoriesProducts, home2PopularProducts } from "@/data/home-2";
import { home3DealsProducts, home3SpecialProducts } from "@/data/home-3";
import { ProductMetaSummary } from "@/types";

export async function GET() {
    
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

    const categoryCounts = new Map<string, number>();
    const brandCounts = new Map<string, number>();

    let minPrice = Infinity;
    let maxPrice = -Infinity;

    for (const product of allProducts) {

        if (product.category) {
            categoryCounts.set(product.category, (categoryCounts.get(product.category) || 0) + 1);
        }

        if (product.brand) {
            brandCounts.set(product.brand, (brandCounts.get(product.brand) || 0) + 1);
        }

        if (product.price < minPrice) {
            minPrice = product.price;
        }
        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    }

    const summary: ProductMetaSummary = {
        categories: Array.from(categoryCounts.entries())
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count),
        
        brands: Array.from(brandCounts.entries())
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count),
        
        priceRange: { 
            min: minPrice === Infinity ? 0 : minPrice, 
            max: maxPrice === -Infinity ? 0 : maxPrice 
        },
        
        total: allProducts.length,
    };

    return NextResponse.json(summary);
}
