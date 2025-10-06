import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";

export const getHome1Collections = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_1.COLLECTIONS);
    return response?.data;
};

export const getHome1TrendingProducts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_1.TRENDING_PRODUCTS);
    return response?.data;
};

export const getHome1PopularProducts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_1.POPULAR_PRODUCTS);
    return response?.data;
};

export const getHome1CollectionsProducts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_1.COLLECTIONS_PRODUCTS);
    return response?.data;
};
