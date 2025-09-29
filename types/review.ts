export interface ReviewAuthor {
    name: string;
    role: string;
    image?: string;
}

export interface Review {
    id: string;
    content: string;
    author: ReviewAuthor;
    rating?: number;
    date?: string | Date;
}
