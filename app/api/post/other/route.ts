import { NextResponse } from "next/server";
import { posts } from "@/data";
import { PostType } from "@/types";

export async function GET() {
    // Get 4 random posts (other news) - excluding the most recent ones
    const sortedPosts = posts
        .slice()
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    // Skip the first 4 (latest) and get the next 4 as "other news"
    const otherPosts: PostType[] = sortedPosts.slice(4, 8);

    return NextResponse.json(otherPosts);
}
