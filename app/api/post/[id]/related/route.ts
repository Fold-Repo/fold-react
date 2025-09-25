import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/data";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const postId = parseInt(id, 10);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return NextResponse.json(
            { message: `Post with ID ${postId} not found` },
            { status: 404 }
        );
    }

    const relatedPosts = posts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 4);

    return NextResponse.json(relatedPosts);
}