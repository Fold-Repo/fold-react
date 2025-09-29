import { ProductDetailsViewTwo } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 2",
};

export default function page() {
    return <ProductDetailsViewTwo productId="2" />
}
