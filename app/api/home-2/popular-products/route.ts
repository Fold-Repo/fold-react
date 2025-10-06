import { NextResponse } from "next/server";
import { home2PopularProducts } from "@/data/home-2";

export async function GET() {
    return NextResponse.json(home2PopularProducts);
}
