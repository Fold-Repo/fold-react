import { BlogDetailView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Details",
};

export default async function page({ params, }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    
    return <BlogDetailView postId={id} />
}
