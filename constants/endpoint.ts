const BASE_URL = {
    development: "/api/",
    production: "/api/",
} as const;

type Env = keyof typeof BASE_URL;
const currentEnv: Env = (process.env.NODE_ENV as Env) || "development";

export const API_BASE_URL = BASE_URL[currentEnv];

export const ENDPOINT = {
    
    BLOG: {
        POSTS: "post",
        POST_BY_ID: (id: string | number) => `post/${id}`,
        RELATED_POSTS: (id: string | number) => `post/${id}/related`,
        POST_METAS: "post/meta",
        LATEST_POSTS: "post/latest",
        OTHER_POSTS: "post/other",
    },

    PRODUCT: {
        PRODUCTS: "product",
        PRODUCT_BY_ID: (id: string | number) => `product/${id}`,
        PRODUCT_METAS: "product/meta",
        PRODUCT_REVIEWS: (id: string | number) => `product/${id}/reviews`,
        SIMILAR_PRODUCTS: (id: string | number) => `product/${id}/similar`,
    },

    COLLECTION: {
    },

    CATEGORY: {
    },

    HOME_1: {
        COLLECTIONS: "home-1/collections",
        TRENDING_PRODUCTS: "home-1/trending-products",
        POPULAR_PRODUCTS: "home-1/popular-products",
        COLLECTIONS_PRODUCTS: "home-1/collections-products",
    },

    HOME_2: {
        BEST_CATEGORIES: "home-2/best-categories",
        POPULAR_PRODUCTS: "home-2/popular-products",
        NEWS_ARTICLES: "home-2/news-articles",
    },

    HOME_3: {
        DEALS_PRODUCTS: "home-3/deals-products",
        SPECIAL_PRODUCTS: "home-3/special-products",
        ROOMS: "home-3/rooms",
    },

    HOME_4: {
        RECOMMENDED_SERVICES: "home-4/recommended-services",
        BEAUTY_SERVICES: "home-4/beauty-services",
    },

    HOME_5: {
        CATEGORIES: "home-5/categories",
        FLASH_SALE_PRODUCTS: "home-5/flash-sale-products",
        COLLECTION_PRODUCTS: "home-5/collection-products",
    },

    HOME_6: {
        BEST_CATEGORIES: "home-6/best-categories",
        NEW_COLLECTION_PRODUCTS: "home-6/new-collection-products",
        BEST_SELLER_PRODUCTS: "home-6/best-seller-products",
        OUR_PRODUCTS: "home-6/our-products",
    },
    HOME_7: {
        TOP_SELLERS: "home-7/top-sellers",
        NEW_ARRIVALS: "home-7/new-arrivals",
        WINTER_COLLECTION: "home-7/winter-collection",
    },

};
