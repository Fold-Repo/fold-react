import { useQuery } from "@tanstack/react-query"
import { getHome3DealsProducts, getHome3SpecialProducts, getHome3Rooms } from "./home3"

export const useGetHome3DealsProducts = () => {
    return useQuery({
        queryKey: ["home3-deals-products"],
        queryFn: getHome3DealsProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome3SpecialProducts = () => {
    return useQuery({
        queryKey: ["home3-special-products"],
        queryFn: getHome3SpecialProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome3Rooms = () => {
    return useQuery({
        queryKey: ["home3-rooms"],
        queryFn: getHome3Rooms,
        staleTime: 10 * 60 * 1000, // 10 minutes (rooms data changes less frequently)
    })
}
