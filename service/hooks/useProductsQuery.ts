import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetProducts } from "@/service";

export function useProductsQuery(defaults = { page: 1, limit: 10 }) {

    const { searchParams } = useQueryParams();

    const page = Number(searchParams.get("page")) || defaults.page;
    const limit = Number(searchParams.get("limit")) || defaults.limit;
    const category = searchParams.get("category") || undefined;
    const brand = searchParams.get("brand") || undefined;
    const availability = searchParams.get("availability") || undefined;
    const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined;
    const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined;
    const rating = searchParams.get("rating") ? Number(searchParams.get("rating")) : undefined;
    const sort = searchParams.get("sort") || undefined;

    const query = { page, limit, category, brand, availability, minPrice, maxPrice, rating, sort } as const;

    const { data, isLoading } = useGetProducts(query);
    const { data: products, currentPage, totalItems } = (data || {});

    return { products, currentPage, totalItems, limit, isLoading };

}
