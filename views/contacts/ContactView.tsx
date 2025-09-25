"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactBanner, ContactForm, ContactInfoCard, ContactMapInfo } from "./components"
import { StarIcon } from "@heroicons/react/24/solid"
import { CONTACT_INFO, CONTACT_MAP_INFO } from "@/constants"


const ContactView: React.FC = () => {

    return (
        <>

            <Header />

            {/*  ================= Breadcrumbs / Hero ================= */}
            <ContactBanner />

            {/*  ================= Main ================= */}
            <div className="section-lg container space-y-12">

                {/*  ================= Connect with us ================= */}
                <div className="grid lg:grid-cols-2 gap-12">

                    <div className="w-full space-y-12" data-aos="fade-up" data-aos-delay="100">

                        <div className="space-y-3">

                            <h2 className="text-gray-900 text-xl font-semibold">Connect with us </h2>

                            <p className="max-w-lg text-sm/6 text-gray-500">Lorem ipsum dolor sit amet consectetur. Commodo ipsum sed sapien convallis lorem. Nisi id velit condimentum tristique nulla vitae nulla auctor. Cras urna urna at porttitor scelerisque facilisis enim nisl.</p>

                            <div className="flex items-center gap-x-2  text-gray-700 dark:text-gray-400 text-xs">

                                <div className="inline-flex items-center gap-x-1 text-lg text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon key={index} className="size-4.5" />
                                    ))}
                                </div>

                                <span>(4.9)</span>
                                <span>2,847 Reviews</span>

                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                            {CONTACT_INFO.map((item, idx) => (
                                <ContactInfoCard key={idx} {...item} />
                            ))}
                        </div>

                    </div>

                    {/*  ================= Contact Form ================= */}
                    <ContactForm />

                </div>

                {/*  ================= All Locations ================= */}
                <div className="w-full space-y-8">

                    <h2 className="text-xl lg:text-2xl font-semibold">All Locations</h2>

                    <div className="grid md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay="200">

                        {CONTACT_MAP_INFO.map((office, index) => (
                            <ContactMapInfo key={index} {...office} />
                        ))}

                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}

export default ContactView


