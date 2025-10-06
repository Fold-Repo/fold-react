export interface CollectionType {
    id: string
    name: string
    slug: string
    description?: string
    image?: string
    productCount?: number
}

export interface CategoryType {
    id: string
    name: string
    image: string
    backgroundColor: string
    href: string
    productCount?: number
}
