import React from "react";
import Image from "next/image";

const ContactBannerTwo = () => {
    return (
        <div className="relative w-full bg-brand">
            <div className="container flex items-center justify-between h-[150px] lg:h-[200px] overflow-hidden">
                <div className="space-y-1 text-white">
                    <h2 className="relative text-xl font-semibold  z-10">Contact Us</h2>
                    <p className="text-xs">We’d love to hear from you</p>
                </div>
                <Image 
                    className="hidden sm:block w-auto h-[150px] lg:h-[200px]" 
                    src="/img/contact_illustration.png" 
                    alt="Contact"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}

export default ContactBannerTwo