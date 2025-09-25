import { LoginView } from "@/views";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Sign In",
};

export default function page() {
    return <LoginView />
}
