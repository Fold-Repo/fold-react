import { RegisterVIew } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Sign Up",
};

export default function page() {
    return <RegisterVIew />
}
