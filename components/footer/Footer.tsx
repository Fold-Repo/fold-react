"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { FOOTER_META_LINKS, FOOTER_SECTIONS } from "@/constants/footer"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const Footer: React.FC = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-white dark:bg-gray-900 py-10 relative overflow-hidden border-t 
            border-gray-300 dark:border-gray-700">

            <div className="container">

                {/* ================= GRID SECTIONS ================= */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5  gap-y-8 sm:gap-y-12">

                    {/* ================= LEFT SECTION ================= */}
                    <div className="sm:col-span-3 lg:col-span-2 space-y-8 sm:w-[70%]">

                        <div className="flex items-center gap-2">
                            <Image src="/img/logo/logo.svg" alt="Logo" width={36} height={36} className="w-9 h-auto" />
                            <span className="font-medium tracking-wide italic text-sm text-gray-900 dark:text-white">Full Logo Goes Here</span>
                        </div>

                        <p className="text-xs sm:text-sm leading-6 text-gray-700 dark:text-gray-300">
                            Be the first to receive all the recent updates, articles, and valuable materials.
                        </p>

                        <form className="flex items-center">
                            <input type="text" className="form-control h-12 !rounded-none dark:bg-gray-800 
                                dark:text-white dark:border-gray-700" placeholder="Enter email" required />
                            <button type="submit" className="btn btn-sm !px-4 
                                btn-brand h-12  !rounded-r-full">
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </form>

                    </div>
                    {/* ================= END LEFT SECTION ================= */}

                    {/* ================= LINK SECTIONS ================= */}
                    {FOOTER_SECTIONS.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">{section.title}</h4>
                            <div className="mt-5 sm:mt-7 grid space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                {section.links.map((link) => (
                                    <Link key={link.label} href={link.href} className="hover:underline">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* ================= END LINK SECTIONS ================= */}

                </div>
                {/* ================= END GRID SECTIONS ================= */}

                {/* ================= FOOTER BOTTOM ================= */}
                <div className="relative mt-12 pt-5 border-t border-gray-300 dark:border-gray-700 flex items-center justify-between flex-wrap gap-5 text-xs md:text-sm text-gray-600 dark:text-gray-400">

                    <div className="flex items gap-3 flex-wrap">
                        {FOOTER_META_LINKS.map((l) => (
                            <Link key={l.label} href={l.href} className="inline-flex hover:underline">{l.label}</Link>
                        ))}
                    </div>

                    <p>© {year} Fold. All rights reserved.</p>

                </div>
                {/* ================= END FOOTER BOTTOM ================= */}

            </div>

        </footer>
    )
}

export default Footer


