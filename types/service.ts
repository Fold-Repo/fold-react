export interface ServiceType {
    id: string
    name: string
    price: number
    image: string
    description?: string
    category?: string
    duration?: string
    rating?: number
    ratingCount?: number
    location?: string
    salonName?: string
}

export interface VendorType {
    id: string
    name: string
    salonName: string
    image: string
    rating: number
    ratingCount: number
    location: string
    category?: string
    description?: string
    price?: number
    duration?: string
}
