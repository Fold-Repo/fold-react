"use client"

import Link from "next/link"
import Image from "next/image"
import { XMarkIcon } from "@heroicons/react/24/outline"
import React, { useMemo, useState } from "react"
import { HEADER_ACTIONS, NAV_GROUPS } from "@/constants/nav"
import { NavGroup } from "@/types/nav"
import SearchBar from "./SearchBar"

type MobileMenuProps = {
    isOpen: boolean
    onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const [openGroupIds, setOpenGroupIds] = useState<Record<string, boolean>>({})

    const grouped: NavGroup[] = useMemo(() => NAV_GROUPS, [])

    const toggleGroup = (id: string) => {
        setOpenGroupIds((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 lg:hidden">

            {/*  ================= Backdrop ================= */}
            <div className="fixed inset-0 bg-black/20 dark:bg-black/40" onClick={onClose} />

            {/*  ================= Panel ================= */}
            <div className="fixed inset-y-0 right-0 w-full sm:max-w-sm bg-white p-6 dark:bg-gray-900 sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10 overflow-y-auto">

                {/*  ================= Header ================= */}
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image src="/img/logo/logo.svg" alt="Logo" width={36} height={36} className="h-8 w-auto" />
                    </Link>
                    <button onClick={onClose} className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="size-6" />
                    </button>
                </div>

                <div className="mt-6 flow-root">

                    <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">

                        {/*  ================= Search ================= */}
                        <SearchBar className="py-6" />

                        {/*  ================= Groups ================= */}
                        <div className="space-y-5 py-5">
                            {grouped.map((group) => (
                                <div key={group.id} className="-mx-3 px-3">
                                    {group.items && group.items.length > 0 ? (
                                        <>
                                            <button type="button" onClick={() => toggleGroup(group.id)} className="flex w-full items-center justify-between rounded-lg py-2 text-xs font-semibold text-gray-900 dark:text-white">
                                                {group.label}
                                                <svg viewBox="0 0 20 20" fill="currentColor" className={`size-5 flex-none transition-transform ${openGroupIds[group.id] ? "rotate-180" : ""}`}>
                                                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            {openGroupIds[group.id] && (
                                                <div className="flex flex-col text-xs mt-2 space-y-5 pt-3 border-l border-gray-500/10 dark:border-white/10 px-4">
                                                    {group.items.map((item, idx) => (
                                                        item.isDivider ? (
                                                            <hr key={`m-div-${group.id}-{${idx}}`} className="pb-1 border-gray-200 dark:border-gray-700" />
                                                        ) : (
                                                            <Link key={item.href} href={item.href as string} className="dark:text-white dark:hover:bg-white/5">
                                                                {item.label}
                                                            </Link>
                                                        )
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={group.href || "#"} className="block rounded-lg py-2 text-xs font-semibold text-gray-900 dark:text-white">
                                            {group.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                {/*  ================= Footer Actions ================= */}
                <div className="pt-24 space-y-4">
                    <Link href={HEADER_ACTIONS.login.href} className="inline-flex items-center gap-x-1.5 text-sm text-gray-900 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>{HEADER_ACTIONS.login.label}</span>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default MobileMenu


