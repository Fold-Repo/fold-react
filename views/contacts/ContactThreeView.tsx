"use client"

import React from "react"
import { Button } from "@/components/ui/button/Button"
import { Input, TextArea } from "@/components/ui"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactBannerTwo, ContactForm, ContactInfoCard } from "./components"
import { CONTACT_INFO } from "@/constants"

const ContactThreeView: React.FC = () => {
    return (
        <>

            <Header />

            <ContactBannerTwo />

            <div className="section-md space-y-12">

                <div className="container grid lg:grid-cols-2 gap-12">

                    <ContactForm variant='light' />

                    <div className="w-full space-y-10" data-aos="fade-up" data-aos-delay="100">

                        <div className="space-y-3">

                            <h2 className="text-gray-900 text-xl font-semibold">Connect with us </h2>

                            <p className="max-w-lg text-sm/6 text-gray-500">Lorem ipsum dolor sit amet consectetur.
                                Commodo ipsum sed sapien convallis lorem. Nisi id velit condimentum tristique nulla vitae nulla auctor.
                                Cras urna urna at porttitor scelerisque facilisis enim nisl.
                            </p>

                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                            {CONTACT_INFO.map((item, idx) => (
                                <ContactInfoCard key={idx} {...item} />
                            ))}
                        </div>

                    </div>

                </div>

                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-[350px] md:h-[500px] overflow-hidden">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.8472464055626!2d-3.4385248228275507!3d55.37812202078751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d5707775fef9b%3A0x5ee2f35ace142dab!2sAbarth%20Unity%20Kidlington!5e0!3m2!1sen!2sng!4v1756632387493!5m2!1sen!2sng" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default ContactThreeView


