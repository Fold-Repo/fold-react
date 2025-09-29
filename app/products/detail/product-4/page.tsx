import { ProductDetailsViewFour } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 4",
};

export default function page() {
    return <ProductDetailsViewFour productId="4" />
}
