import { CartViewTwo } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Cart V2",
};

export default function page() {
    return <CartViewTwo />
}
