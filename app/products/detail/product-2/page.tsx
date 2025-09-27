import { ProductDetailsViewTwo } from "@/views/products";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 2",
};

export default function page() {
    return <ProductDetailsViewTwo productId="2" variant="2" />
}
