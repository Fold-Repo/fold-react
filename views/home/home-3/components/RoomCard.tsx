"use client"

import React from "react"
import { Image } from "@heroui/react"
import { Button } from "@/components/ui/button"

interface RoomCardProps {
    room: {
        id: string
        name: string
        image: string
        href: string
    }
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <div className="relative p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col">

            {/* ================= ROOM IMAGE ================= */}
            <Image src={room.image} alt={room.name}
                width={400} className="w-full aspect-9/8 object-cover object-top rounded-lg"
                radius="lg"
            />

            {/* ================= ROOM BUTTON ================= */}
            <div className="flex items-center justify-center py-5 mt-3">

                <Button size="sm" variant="outline-brand" className="!px-12 max-w-max">
                    {room.name}
                </Button>

            </div>

        </div>
    )
}

export { RoomCard }
