"use client"

import React from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

type SearchBarProps = {
    className?: string
    inputClassName?: string
    placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ className = "", inputClassName = "", 
    placeholder = "Search for your product" }) => {
    return (
        <form className={`relative ${className}`}>
            <input type="text" className={`form-control pr-8  !text-xs text-gray-700 w-full 
                ${inputClassName}`} placeholder={placeholder} />
            <button type="button" className="absolute right-1 top-1/2 -translate-y-1/2 btn !py-1.5 !px-2 btn-sm btn-brand">
                <MagnifyingGlassIcon className="size-4" />
            </button>
        </form>
    )
}

export default SearchBar


