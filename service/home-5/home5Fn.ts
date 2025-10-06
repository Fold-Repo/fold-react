import { useQuery } from "@tanstack/react-query"
import { getHome5Categories, getHome5FlashSaleProducts, getHome5CollectionProducts } from "./home5"

export const useGetHome5Categories = () => {
    return useQuery({
        queryKey: ["home5-categories"],
        queryFn: getHome5Categories,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome5FlashSaleProducts = () => {
    return useQuery({
        queryKey: ["home5-flash-sale-products"],
        queryFn: getHome5FlashSaleProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome5CollectionProducts = () => {
    return useQuery({
        queryKey: ["home5-collection-products"],
        queryFn: getHome5CollectionProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}
