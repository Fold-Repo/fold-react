import React from "react"
import Link from "next/link";
import { MapPinIcon, PhoneIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { CONTACT_MAP_INFO_TYPE } from "@/constants";

const ContactMapInfo = ({ title, mapSrc, address, phone, mapLink = "#" } : CONTACT_MAP_INFO_TYPE) => {
    return (
        <div className="bg-white dark:bg-gray-800 h-full rounded-xl p-5 space-y-4">

            <h4 className="text-gray-900 dark:text-gray-400 text-xs md:text-sm font-medium">
                {title}
            </h4>

            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-[200px] md:h-[300px] overflow-hidden">
                <iframe className="w-full h-full" src={mapSrc} style={{ border: 0 }}
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="space-y-3">

                <div className="flex items-center gap-x-2">
                    <MapPinIcon className="size-4 text-brand dark:text-blue-500" />
                    <p className="text-xs md:text-sm text-gray-500">{address}</p>
                </div>

                <div className="flex items-center gap-x-2">
                    <PhoneIcon className="size-4 text-brand dark:text-blue-500" />
                    <p className="text-xs md:text-sm text-gray-500">{phone}</p>
                </div>

            </div>

            <Link href={mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand">
                <span className="font-medium">View Larger Map</span>
                <ArrowUpRightIcon className="size-4" />
            </Link>

        </div>
    )
}

export default ContactMapInfo