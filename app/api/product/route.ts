import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data";
import { paginate } from "@/utils";
import { ProductType } from "@/types";

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const category = searchParams.get("category")?.toLowerCase();
    const brand = searchParams.get("brand")?.toLowerCase();
    const minPrice = parseFloat(searchParams.get("minPrice") || "0");
    const maxPrice = parseFloat(searchParams.get("maxPrice") || "999999");
    const rating = parseFloat(searchParams.get("rating") || "0");
    const availability = searchParams.get("availability")?.split(",") || [];
    const sort = searchParams.get("sort") || "default";

    let data: ProductType[] = [...products];

    // Filter by category
    if (category) {
        data = data.filter(
            (product) => product.category?.toLowerCase() === category
        );
    }

    // Filter by brand
    if (brand) {
        data = data.filter(
            (product) => product.brand?.toLowerCase() === brand
        );
    }

    // Filter by price range
    data = data.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Filter by rating
    if (rating > 0) {
        data = data.filter(
            (product) => product.rating >= rating
        );
    }

    // Filter by availability
    if (availability.length > 0) {
        data = data.filter((product) => {
            if (availability.includes("in-stock") && availability.includes("out-of-stock")) {
                return true; // Show all products
            } else if (availability.includes("in-stock")) {
                return product.inStock === true;
            } else if (availability.includes("out-of-stock")) {
                return product.inStock === false;
            }
            return true;
        });
    }

    // Sort products
    switch (sort) {
        case "price-low":
            data.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            data.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            data.sort((a, b) => b.rating - a.rating);
            break;
        case "popularity":
            data.sort((a, b) => b.ratingCount - a.ratingCount);
            break;
        case "newest":
            data.sort((a, b) => parseInt(b.id) - parseInt(a.id));
            break;
        case "oldest":
            data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            break;
        default:
            break;
    }

    const paginated = paginate<ProductType>(data, { page, limit });

    return NextResponse.json(paginated);
}
