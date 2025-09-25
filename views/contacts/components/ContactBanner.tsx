import React from "react"
import { PhoneIcon } from "@heroicons/react/24/outline"


const ContactBanner = () => {
    return (
        <div className="relative w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/img/bg/contact_bg.jpg)" }}>

            <div className="absolute inset-0 bg-[#0065EA]/30"></div>

            <div className="h-full min-h-[200px] relative flex items-center justify-center container">

                <h2 className="relative text-xl font-semibold text-white z-10">Contact Us</h2>

                <div className="flex items-center gap-x-1 bg-white dark:bg-gray-800 py-2.5 
                            px-4 absolute bottom-0 right-0 text-brand dark:text-gray-200">
                    <PhoneIcon className='size-5' />
                    <span className="font-medium tracking-wide text-sm">+277 83710221</span>
                </div>

            </div>

        </div>
    )
}

export default ContactBanner