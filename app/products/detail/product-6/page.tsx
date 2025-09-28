import { ProductDetailsViewSix } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 6",
};

export default function page() {
    return <ProductDetailsViewSix productId="6" />
}
