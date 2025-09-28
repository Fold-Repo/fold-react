export interface ProductColor {
    id?: string;
    color: string;
    image: string;
    label: string;
}

export interface SpecificationItem {
    label: string;
    value: string;
}

export interface SpecificationType {
    title: string;
    items?: SpecificationItem[];
    features?: string[];
}

import { Review } from "./review";

export interface ProductType {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    category: string;
    rating: number;
    ratingCount: number;
    image: string;
    description?: string;
    brand?: string;
    colors?: ProductColor[];
    inStock: boolean;
    isFreeDelivery?: boolean;
    specifications?: SpecificationType[];
    reviews?: Review[];
}

export interface ProductMetaSummary {
    categories: Array<{ name: string; count: number }>;
    brands: Array<{ name: string; count: number }>;
    priceRange: { min: number; max: number };
    total: number;
}

export interface ProductFilters {
    page?: number;
    limit?: number;
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
    availability?: string[];
    sort?: string;
}

export interface ProductResponse {
    data: ProductType[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
