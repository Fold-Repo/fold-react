import { axiosNoAuth } from "@/lib/axiosConfig"
import { ENDPOINT } from "@/constants/endpoint"
import { VendorType, ServiceType } from "@/types"

export const getHome4RecommendedServices = async (): Promise<VendorType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_4.RECOMMENDED_SERVICES)
    return response.data
}

export const getHome4BeautyServices = async (): Promise<ServiceType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_4.BEAUTY_SERVICES)
    return response.data
}
