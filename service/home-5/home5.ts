import { axiosNoAuth } from "@/lib"
import { ENDPOINT } from "@/constants/endpoint"
import { CategoryType, ProductType } from "@/types"

export const getHome5Categories = async (): Promise<CategoryType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_5.CATEGORIES)
    return response.data
}

export const getHome5FlashSaleProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_5.FLASH_SALE_PRODUCTS)
    return response.data
}

export const getHome5CollectionProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_5.COLLECTION_PRODUCTS)
    return response.data
}
