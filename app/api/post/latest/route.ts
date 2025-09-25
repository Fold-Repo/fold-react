import { NextResponse } from "next/server";
import { posts } from "@/data";
import { PostType } from "@/types";

export async function GET() {
    // Get the 4 most recent posts (latest news)
    const latestPosts: PostType[] = posts
        .slice()
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 4);

    return NextResponse.json(latestPosts);
}
