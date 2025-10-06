import { axiosNoAuth } from "@/lib"
import { ENDPOINT } from "@/constants/endpoint"
import { CategoryType, ProductType } from "@/types"

export const getHome6BestCategories = async (): Promise<CategoryType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_6.BEST_CATEGORIES)
    return response.data
}

export const getHome6NewCollectionProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_6.NEW_COLLECTION_PRODUCTS)
    return response.data
}

export const getHome6BestSellerProducts = async (): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(ENDPOINT.HOME_6.BEST_SELLER_PRODUCTS)
    return response.data
}

export const getHome6OurProducts = async (filter: string = "hot"): Promise<ProductType[]> => {
    const response = await axiosNoAuth.get(`${ENDPOINT.HOME_6.OUR_PRODUCTS}?filter=${filter}`)
    return response.data
}
