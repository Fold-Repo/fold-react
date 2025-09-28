import { ProductDetailsViewThree } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Product Details 3",
};

export default function page() {
    return <ProductDetailsViewThree productId="3"/>
}
