import { BlogView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Blog",
};

export default function page() {
    return <BlogView />
}
