import { ProductDetailsViewFive } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 5",
};

export default function page() {
    return <ProductDetailsViewFive productId="5"/>
}
