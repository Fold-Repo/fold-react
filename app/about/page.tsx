import { AboutView } from "@/views"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
}

export default function page() {
    return <AboutView />
}
