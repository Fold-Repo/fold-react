import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductMetas, getProductById, getProductReviews, getSimilarProducts } from "./product";

export const useGetProducts = (params: Record<string, unknown>) => {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["products", params],
        queryFn: () => getProducts(params),
    });
    return { data, isLoading, isFetching, error };
};

export const useGetProductMetas = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["product_metas"],
        queryFn: () => getProductMetas(),
    });

    return { response, isLoading };
};

export const useGetProductById = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["product_", id],
        queryFn: () => getProductById(id),
        enabled: !!id
    });

    return { response, isLoading };
};

export const useGetProductReviews = (id: string | number) => {
    const { data: response, isLoading, error } = useQuery({
        queryKey: ["product-reviews", id],
        queryFn: () => getProductReviews(id),
        enabled: !!id
    });

    return { response, isLoading, error };
};

export const useGetSimilarProducts = (id: string | number) => {
    const { data: response, isLoading, error } = useQuery({
        queryKey: ["similar-products", id],
        queryFn: () => getSimilarProducts(id),
        enabled: !!id
    });

    return { response, isLoading, error };
};
