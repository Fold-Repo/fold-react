"use client"

import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { NavGroup } from "@/types/nav"
import { useClickOutside } from "@/hooks/useClickOutside"

type DesktopDropdownProps = {
    group: NavGroup
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ group }) => {
    const [open, setOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(rootRef, () => setOpen(false))

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        document.addEventListener("keydown", onEsc)
        return () => document.removeEventListener("keydown", onEsc)
    }, [])

    return (
        <div ref={rootRef} className="relative" >

            {/*  ================= Desktop Menu Button ================= */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="cursor-pointer flex items-center gap-x-1 text-sm font-semibold text-gray-600 dark:text-white">
                {group.label}
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}>
                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
            </button>

            {/*  ================= Desktop Popover ================= */}
            {open && (
                <div className="z-40 absolute left-0 mt-3 min-w-[10rem] overflow-hidden rounded-xl bg-white shadow-lg outline 
                    outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 px-1 py-2 text-xs space-y-0.5">
                    {Array.isArray(group.items) && group.items.map((item, idx) => (
                        item.isDivider ? (
                            <hr key={`div-${group.id}-${idx}`} className="my-2 border-gray-200 dark:border-gray-700" />
                        ) : (
                            <Link key={item.href} href={item.href as string} className="block rounded-lg py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-900 dark:text-white">
                                {item.label}
                            </Link>
                        )
                    ))}
                </div>
            )}

        </div>
    )
}

export default DesktopDropdown


