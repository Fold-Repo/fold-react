import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/data";
import { paginate } from "@/utils";
import { PostType } from "@/types";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const category = searchParams.get("category")?.toLowerCase();
    const trending = (searchParams.get("trending") || "").toLowerCase() === "true";

    let data: PostType[] = [...posts];

    if (category) {
        data = data.filter(
            (post) => post.category?.toLowerCase() === category
        );
    }

    if (trending) {
        const top4 = data
            .slice()
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(0, 4);
        return NextResponse.json(top4);
    }

    const paginated = paginate<PostType>(data, { page, limit });

    return NextResponse.json(paginated);
}
