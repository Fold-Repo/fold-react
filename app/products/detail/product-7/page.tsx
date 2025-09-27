import { ProductDetailsViewSeven } from "@/views/products";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 7",
};

export default function page() {
    return <ProductDetailsViewSeven productId="7" variant="7" />
}
