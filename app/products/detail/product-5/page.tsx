import { ProductDetailsViewFive } from "@/views/products";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 5",
};

export default function page() {
    return <ProductDetailsViewFive productId="5" variant="5" />
}
