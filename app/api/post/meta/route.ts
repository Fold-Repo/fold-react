import { NextResponse } from "next/server";
import { posts } from "@/data";
import { PostMetaSummary } from "@/types";

export async function GET() {
    const categoryCounts = new Map<string, number>();
    for (const post of posts) {
        if (!post.category) continue;
        categoryCounts.set(post.category, (categoryCounts.get(post.category) || 0) + 1);
    }

    const summary: PostMetaSummary = {
        categories: Array.from(categoryCounts.entries()).map(([name, count]) => ({ name, count })),
        total: posts.length,
    };

    return NextResponse.json(summary);
}
