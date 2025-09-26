import { ProductsViewTwo } from "@/views/products";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Products - Style 2",
};

export default function page() {
    return <ProductsViewTwo />
}
