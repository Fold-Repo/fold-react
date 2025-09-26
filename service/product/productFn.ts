import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductMetas, getProductById } from "./product";

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
