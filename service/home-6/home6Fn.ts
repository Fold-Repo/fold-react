import { useQuery } from "@tanstack/react-query"
import { getHome6BestCategories, getHome6NewCollectionProducts, getHome6BestSellerProducts, getHome6OurProducts } from "./home6"

export const useGetHome6BestCategories = () => {
    return useQuery({
        queryKey: ["home6-best-categories"],
        queryFn: getHome6BestCategories,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome6NewCollectionProducts = () => {
    return useQuery({
        queryKey: ["home6-new-collection-products"],
        queryFn: getHome6NewCollectionProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome6BestSellerProducts = () => {
    return useQuery({
        queryKey: ["home6-best-seller-products"],
        queryFn: getHome6BestSellerProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome6OurProducts = (filter: string = "hot") => {
    return useQuery({
        queryKey: ["home6-our-products", filter],
        queryFn: () => getHome6OurProducts(filter),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}
