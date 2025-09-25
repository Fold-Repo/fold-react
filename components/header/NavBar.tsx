"use client"

import React from "react"
import Link from "next/link"
import DesktopDropdown from "./DesktopDropdown"
import { NAV_GROUPS } from "@/constants/nav"

const NavBar: React.FC = () => {
    return (
        <div className="hidden lg:flex lg:gap-x-7">
            {NAV_GROUPS.map((group) => (
                (group.items && group.items.length > 0) ? (
                    <DesktopDropdown key={group.id} group={group} />
                ) : (
                    <Link key={group.id} href={group.href || "#"} className="text-sm text-gray-600 dark:text-white">
                        {group.label}
                    </Link>
                )
            ))}
        </div>
    )
}

export default NavBar


