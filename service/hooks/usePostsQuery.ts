import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetPosts } from "@/service";

export function usePostsQuery(defaults = { page: 1, limit: 10 }) {

    const { searchParams } = useQueryParams();

    const page = Number(searchParams.get("page")) || defaults.page;
    const limit = Number(searchParams.get("limit")) || defaults.limit;
    const category = searchParams.get("category") || undefined;

    const query = { page, limit, category } as const;

    const { data, isLoading } = useGetPosts(query);
    const { data: posts, currentPage, totalItems } = (data || {});

    return { posts, currentPage, totalItems, limit, isLoading };

}


