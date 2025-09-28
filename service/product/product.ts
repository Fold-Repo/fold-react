import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";

export const getProducts = async (params = {}) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCTS, {
        params
    });
    return response?.data;
};

export const getProductMetas = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCT_METAS);
    return response?.data;
};

export const getProductById = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCT_BY_ID(id));
    return response?.data;
};

export const getProductReviews = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCT_REVIEWS(id));
    return response?.data.data;
};

export const getSimilarProducts = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.SIMILAR_PRODUCTS(id));
    return response?.data.data;
};