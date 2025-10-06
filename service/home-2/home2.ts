import { axiosNoAuth } from "@/lib/axiosConfig";
import { ProductType, PostType } from "@/types";
import { ENDPOINT } from "@/constants/endpoint";

export const getHome2BestCategories = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get<ProductType[]>(ENDPOINT.HOME_2.BEST_CATEGORIES);
    return response.data;
};

export const getHome2PopularProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get<ProductType[]>(ENDPOINT.HOME_2.POPULAR_PRODUCTS);
    return response.data;
};

export const getHome2NewsArticles = async (): Promise<PostType[]> => {
    const response = await axiosNoAuth.get<PostType[]>(ENDPOINT.HOME_2.NEWS_ARTICLES);
    return response.data;
};
