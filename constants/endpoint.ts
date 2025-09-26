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
    },

    COLLECTION: {
    },

    CATEGORY: {
    },

};
