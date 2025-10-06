import { useQuery } from "@tanstack/react-query";
import { 
    getHome1Collections, 
    getHome1TrendingProducts, 
    getHome1PopularProducts, 
    getHome1CollectionsProducts 
} from "./home1";

export const useGetHome1Collections = () => {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["home1-collections"],
        queryFn: () => getHome1Collections(),
    });
    return { data, isLoading, isFetching, error };
};

export const useGetHome1TrendingProducts = () => {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["home1-trending-products"],
        queryFn: () => getHome1TrendingProducts(),
    });
    return { data, isLoading, isFetching, error };
};

export const useGetHome1PopularProducts = () => {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["home1-popular-products"],
        queryFn: () => getHome1PopularProducts(),
    });
    return { data, isLoading, isFetching, error };
};

export const useGetHome1CollectionsProducts = () => {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["home1-collections-products"],
        queryFn: () => getHome1CollectionsProducts(),
    });
    return { data, isLoading, isFetching, error };
};
