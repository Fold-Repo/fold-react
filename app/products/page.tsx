import { ProductsView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Products",
};

export default function page() {
    return <ProductsView />
}
