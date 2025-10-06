import { useQuery } from "@tanstack/react-query"
import { getHome7TopSellers, getHome7NewArrivals, getHome7WinterCollection } from "./home7"

export const useGetHome7TopSellers = () => {
    return useQuery({
        queryKey: ["home-7-top-sellers"],
        queryFn: getHome7TopSellers,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}

export const useGetHome7NewArrivals = () => {
    return useQuery({
        queryKey: ["home-7-new-arrivals"],
        queryFn: getHome7NewArrivals,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}

export const useGetHome7WinterCollection = () => {
    return useQuery({
        queryKey: ["home-7-winter-collection"],
        queryFn: getHome7WinterCollection,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}
