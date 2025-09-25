export interface AuthorType {
    name: string;
    avatar: string; 
}

export interface PostType {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    content: string;
    image: string; 
    category?: string;
    tags?: string[];
    author: AuthorType;
    publishedAt: string; 
    readMinutes?: number;
}

export interface PostMetaSummary {
    categories: { name: string; count: number }[];
    total: number;
}

export interface PostCategories {
    name: string;
    count: number; 
}