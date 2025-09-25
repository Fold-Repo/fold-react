"use client"

import React from "react"
import { Button } from "@/components/ui/button/Button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CONTACT_INFO, CONTACT_MAP_INFO } from "@/constants"
import { ContactForm, ContactInfoCard, ContactMapInfo } from "./components"

const ContactTwoView: React.FC = () => {
    return (
        <>

            <Header />

            <div className="space-y-12 mb-12">

                {/*  ================= CONTACT ================= */}
                <div className="w-full space-y-6 py-8 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url(/img/bg/contact_bg_2.png)" }}>

                    <div className="container !max-w-7xl space-y-12">

                        <div className="grid md:grid-cols-2 w-full h-full overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url(/img/bg/contact_bg_3.png)" }}>

                            <ContactForm />

                        </div>

                        <div className="space-y-3" data-aos="fade-up" data-aos-delay="150">

                            <h2 className="text-lg font-medium text-gray-200">Contact Information</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                                {CONTACT_INFO.map((item, idx) => (
                                    <ContactInfoCard variant='dark' key={idx} {...item} />
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

                {/*  ================= All Locations ================= */}
                <div className="container w-full space-y-8">

                    <h2 className="text-xl lg:text-2xl font-semibold text-center">All Locations</h2>

                    <div className="grid md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay="500">

                        {CONTACT_MAP_INFO.map((office, index) => (
                            <ContactMapInfo key={index} {...office} />
                        ))}

                    </div>

                    <Button className="mx-auto btn-brand btn-sm !px-12 !py-3">View all location on Map</Button>

                </div>

            </div>

            <Footer />

        </>
    )
}

export default ContactTwoView


