import { CartView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Cart V1",
};

export default function page() {
    return <CartView />
}
