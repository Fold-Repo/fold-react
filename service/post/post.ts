import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";

export const getPosts = async (params = {}) => {
    const response = await axiosNoAuth.get(ENDPOINT.BLOG.POSTS, {
        params
    });
    return response?.data;
};

export const getPostMetas = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.BLOG.POST_METAS);
    return response?.data;
};

export const getPostById = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.BLOG.POST_BY_ID(id));
    return response?.data;
};

export const getRelatedPost = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.BLOG.RELATED_POSTS(id));
    return response?.data;
};

export const getLatestPosts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.BLOG.LATEST_POSTS);
    return response?.data;
};

export const getOtherPosts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.BLOG.OTHER_POSTS);
    return response?.data;
};