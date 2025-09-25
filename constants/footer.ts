import { FooterSection } from "@/types/footer"

/*  ================= Footer Sections ================= */
export const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Security", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Career", href: "#" },
            { label: "Service Status", href: "#" },
            { label: "Partnerships", href: "#" },
            { label: "Mission roadmap", href: "#" },
            { label: "Community", href: "#" }
        ]
    },
    {
        title: "More from E-Commerce",
        links: [
            { label: "Mass Payments", href: "#" },
            { label: "Debit card", href: "#" },
            { label: "Rayna for Startups", href: "#" },
            { label: "Rayna for Developers", href: "#" },
            { label: "Rayna for No-code", href: "#" },
            { label: "Assets", href: "#" }
        ]
    },
    {
        title: "Various Templates",
        links: [
            { label: "Financial Templates", href: "#" },
            { label: "Fashion & Beauty Templates", href: "#" },
            { label: "Agriculture Templates", href: "#" },
            { label: "Manufacturing Templates", href: "#" }
        ]
    }
]

/*  ================= Footer Meta Links ================= */
export const FOOTER_META_LINKS: { label: string; href: string }[] = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Manage Cookies", href: "#" }
]


