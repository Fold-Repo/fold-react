import { API_BASE_URL, ENDPOINT } from "@/constants"
import { ProductType } from "@/types"

export const getHome7TopSellers = async (): Promise<ProductType[]> => {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT.HOME_7.TOP_SELLERS}`)
    if (!response.ok) {
        throw new Error("Failed to fetch home-7 top sellers")
    }
    return response.json()
}

export const getHome7NewArrivals = async (): Promise<ProductType[]> => {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT.HOME_7.NEW_ARRIVALS}`)
    if (!response.ok) {
        throw new Error("Failed to fetch home-7 new arrivals")
    }
    return response.json()
}

export const getHome7WinterCollection = async (): Promise<ProductType[]> => {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT.HOME_7.WINTER_COLLECTION}`)
    if (!response.ok) {
        throw new Error("Failed to fetch home-7 winter collection")
    }
    return response.json()
}
