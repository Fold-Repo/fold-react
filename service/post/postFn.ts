import { useQuery } from "@tanstack/react-query";
import { getPostById, getPostMetas, getPosts, getRelatedPost, getLatestPosts, getOtherPosts } from "./post";

export const useGetPosts = (params: {}) => {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["posts", params],
        queryFn: () => getPosts(params),
    });
    return { data, isLoading, isFetching, error };
};

export const useGetPostMetas = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["post_metas",],
        queryFn: () => getPostMetas(),
    });

    return { response, isLoading };
};

export const useGetPostById = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["post_", id],
        queryFn: () => getPostById(id),
        enabled: !!id
    });

    return { response, isLoading };
};

export const useGetRelatedPosts = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["post_", id, "_related"],
        queryFn: () => getRelatedPost(id),
        enabled: !!id
    });

    return { response, isLoading };
};

export const useGetLatestPosts = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["latest_posts"],
        queryFn: () => getLatestPosts(),
    });

    return { response, isLoading };
};

export const useGetOtherPosts = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ["other_posts"],
        queryFn: () => getOtherPosts(),
    });

    return { response, isLoading };
};