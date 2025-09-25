import { Button, Input } from "@/components/ui"
import React from "react"

const StayUpdated = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-5">

            <div className="text-center space-y-1.5">
                <h2 className="text-base font-semibold ">Stay Updated</h2>
                <p className="text-sm text-gray-600">Get the latest Stories delivered to your inbox</p>
            </div>

            <form className="space-y-4">

                <Input type="email" name="email" label='Email address' placeholder="Email address" />

                <Button type="submit" className="w-full">Subscribe</Button>

            </form>

        </div>
    )
}

export default StayUpdated