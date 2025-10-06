import { NextResponse } from "next/server";
import { home2NewsArticles } from "@/data/home-2-posts";

export async function GET() {
    return NextResponse.json(home2NewsArticles);
}
