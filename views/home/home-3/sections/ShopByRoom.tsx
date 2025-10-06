"use client"

import React from "react"
import { RoomCard, ShopByRoomSkeleton } from "@/components"
import { useGetHome3Rooms } from "@/service"

const ShopByRoom: React.FC = () => {
    const { data: roomsData, isLoading } = useGetHome3Rooms()

    if (isLoading) {
        return <ShopByRoomSkeleton />
    }

    return (
        <div className="container space-y-8" data-aos="fade-up" data-aos-delay="100">
            
            {/* ================= SECTION TITLE ================= */}
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-semibold" data-aos="fade-up" data-aos-delay="200">
                Shop by Room
            </h2>

            {/* ================= ROOMS GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {roomsData?.map((room, index) => (
                    <div key={room.id} data-aos="fade-up" data-aos-delay={`${300 + (index * 100)}`}>
                        <RoomCard room={room} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export { ShopByRoom }