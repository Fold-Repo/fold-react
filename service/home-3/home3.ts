import { axiosNoAuth } from "@/lib/axiosConfig"
import { ENDPOINT } from "@/constants/endpoint"
import { ProductType } from "@/types"

export const getHome3DealsProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_3.DEALS_PRODUCTS)
    return response.data
}

export const getHome3SpecialProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_3.SPECIAL_PRODUCTS)
    return response.data
}

export const getHome3Rooms = async (): Promise<Array<{
    id: string
    name: string
    image: string
    href: string
}>> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_3.ROOMS)
    return response.data
}
