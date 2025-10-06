import { NextResponse } from "next/server"

const roomsData = [
    {
        id: "bedroom",
        name: "Bedroom",
        image: "/img/home/3/4.jpg",
        href: "/products?categoryType=bedroom"
    },
    {
        id: "living-room",
        name: "Living Room",
        image: "/img/home/3/5.jpg",
        href: "/products?categoryType=living-room"
    },
    {
        id: "childrens-room",
        name: "Children's room",
        image: "/img/home/3/6.jpg",
        href: "/products?categoryType=childrens-room"
    },
    {
        id: "dining",
        name: "Dining",
        image: "/img/home/3/7.jpg",
        href: "/products?categoryType=dining"
    }
]

export async function GET() {
    try {
        return NextResponse.json(roomsData)
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch rooms data" },
            { status: 500 }
        )
    }
}
