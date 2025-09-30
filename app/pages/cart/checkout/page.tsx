import { CheckoutView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Checkout",
};

export default function page() {
    return <CheckoutView />
}
