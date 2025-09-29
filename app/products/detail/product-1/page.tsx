import { ProductDetailsView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 1",
};

export default function page() {
    return <ProductDetailsView productId="1" />
}
