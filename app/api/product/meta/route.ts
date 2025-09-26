import { NextResponse } from "next/server";
import { products } from "@/data";
import { ProductMetaSummary } from "@/types";

export async function GET() {
    
    const categoryCounts = new Map<string, number>();
    const brandCounts = new Map<string, number>();

    let minPrice = Infinity;
    let maxPrice = -Infinity;

    for (const product of products) {

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
        
        total: products.length,
    };

    return NextResponse.json(summary);
}
