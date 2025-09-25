import { ContactThreeView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Contact",
};

export default function page() {
    return <ContactThreeView />
}


