import { ContactView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Contact Us",
};

export default function page() {
    return <ContactView />
}
