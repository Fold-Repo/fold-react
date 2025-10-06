import { useQuery } from "@tanstack/react-query";
import { getHome2BestCategories, getHome2PopularProducts, getHome2NewsArticles } from "./home2";

export const useGetHome2BestCategories = () => {
    return useQuery({
        queryKey: ["home2-best-categories"],
        queryFn: getHome2BestCategories,
    });
};

export const useGetHome2PopularProducts = () => {
    return useQuery({
        queryKey: ["home2-popular-products"],
        queryFn: getHome2PopularProducts,
    });
};

export const useGetHome2NewsArticles = () => {
    return useQuery({
        queryKey: ["home2-news-articles"],
        queryFn: getHome2NewsArticles,
    });
};
