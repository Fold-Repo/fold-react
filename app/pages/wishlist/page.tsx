import { WishlistView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Wishlists",
};

export default function page() {
    return <WishlistView />
}
