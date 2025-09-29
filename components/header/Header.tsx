"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { Bars3Icon, HeartIcon } from "@heroicons/react/24/outline"
import { HEADER_ACTIONS, NAV_GROUPS } from "@/constants/nav"
import DesktopDropdown from "./DesktopDropdown"
import MobileMenu from "./MobileMenu"
import SearchBar from "./SearchBar"
import { useCart, useWishlist } from "@/store"

const Header: React.FC = () => {

    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const { total: cartTotal } = useCart()
    const { total: wishlistTotal } = useWishlist()

    return (
        <>

            {/*  ================= Top Banner ================= */}
            <nav className="bg-brand p-2">
                <div className="container flex items-center flex-wrap gap-y-2 gap-x-3 justify-center">
                    <Image className="w-5 md:w-6" src="/img/gift.svg" alt="Gift Box" width={24} height={24} />
                    <p className="text-white text-[12px] md:text-xs">Special Offer: 50% off - limited time only</p>
                    <button className="btn btn-outline !border-border btn-sm !text-[12px] !py-1.5">Buy Now</button>
                </div>
            </nav>

            {/*  ================= Header ================= */}
            <header className="bg-white dark:bg-gray-900 py-4">

                <nav className="container flex items-center justify-between">

                    {/*  ================= Logo ================= */}
                    <Link href="/" className="-m-1.5 p-1.5 flex">
                        <Image src="/img/logo/logo.svg" alt="Logo" width={36} height={36} className="h-8 md:h-9 w-auto" />
                    </Link>

                    {/*  ================= Desktop Menus ================= */}
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

                    {/*  ================= Right Navs ================= */}
                    <div className="flex items-center gap-x-5 justify-end">

                        <SearchBar className='hidden xl:block relative' inputClassName='!py-2 min-w-[15rem]' />

                        <Link href={HEADER_ACTIONS.login.href} className="hidden lg:inline-flex items-center gap-x-1.5 text-sm text-gray-900 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>{HEADER_ACTIONS.login.label}</span>
                        </Link>

                        {/* ================= WISHLIST ================= */}
                        <Link href={HEADER_ACTIONS.wishlist.href} className="text-gray-900 dark:text-white flex items-center relative">
                            <HeartIcon className="size-5 shrink-0" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {wishlistTotal}
                            </span>
                        </Link>

                        {/* ================= CART ================= */}
                        <Link href={HEADER_ACTIONS.cart.href} className="text-gray-900 dark:text-white flex items-center relative">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-5 shrink-0 ">
                                <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {cartTotal}
                            </span>
                        </Link>

                        {/*  ================= Mobile Open Menu ================= */}
                        <div className="flex lg:hidden justify-end">
                            <button type="button" onClick={() => setIsMobileOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400">
                                <Bars3Icon className="size-6" />
                            </button>
                        </div>

                    </div>

                </nav>

            </header>

            {/*  ================= Mobile Nav ================= */}
            <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

        </>
    )
}

export default Header


