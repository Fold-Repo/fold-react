import { useQuery } from "@tanstack/react-query"
import { getHome4RecommendedServices, getHome4BeautyServices } from "./home4"

export const useGetHome4RecommendedServices = () => {
    return useQuery({
        queryKey: ["home4", "recommended-services"],
        queryFn: getHome4RecommendedServices,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useGetHome4BeautyServices = () => {
    return useQuery({
        queryKey: ["home4", "beauty-services"],
        queryFn: getHome4BeautyServices,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}
