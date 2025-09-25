"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
    {
        title: "Building the Future...",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Shop Smarter, Live Better",
        desc: "Discover top deals and curated products tailored for you every day.",
    },
    {
        title: "Fast Delivery. Great Value.",
        desc: "Get your orders quickly with our nationwide delivery network.",
    },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    const [current, setCurrent] = useState(0);

    // ================= Auto Slide Effect =================
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        // ================= Main Wrapper =================
        <main className="min-h-screen relative inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img/bg/auth_bg.png')" }}>

            {/* ================= Overlay ================= */}
            <div className="absolute inset-0 bg-gradient-to-l from-neutral-800/80 to-neutral-700/60 pointer-events-none"></div>

            {/* ================= Container Grid ================= */}
            <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-end min-h-screen pt-8 md:pt-24">

                {/* ================= Left: Hero Section ================= */}
                <section className="relative flex items-start justify-start p-6 lg:p-12 pb-12 lg:pb-0 lg:pt-12 2xl:pt-26" data-aos="fade-up" data-interval="5000">

                    <div className="relative text-white max-w-xl">

                        {/* ================= Logo ================= */}
                        <div className="flex items-center gap-2 mb-5">
                            <Image src="/img/logo/logo.svg" alt="Logo" width={40} height={40} className="w-10" />
                            <span className="font-medium tracking-wide italic">Full Logo Goes Here</span>
                        </div>

                        {/* ================= Slide Title ================= */}
                        <h1 key={slides[current].title} className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold leading-tight text-white transition-opacity duration-300">
                            {slides[current].title}
                        </h1>

                        {/* ================= Slide Description ================= */}
                        <p key={slides[current].desc} className="mt-2 text-sm md:text-base leading-6 max-w-lg text-white/90 transition-opacity duration-300">
                            {slides[current].desc}
                        </p>

                        {/* ================= Hero Dots ================= */}
                        <div className="flex gap-3 mt-12" role="tablist" aria-label="Hero slides">
                            {slides.map((_, i) => (
                                <button key={i} type="button" aria-label={`Slide ${i + 1}`} onClick={() => setCurrent(i)} className={`h-1 lg:h-1.5 rounded-full transition-all duration-300 cursor-pointer ${current === i ? "bg-white w-12" : "bg-white/50 w-8"}`} />
                            ))}
                        </div>

                    </div>

                </section>

                {/* ================= Right: Auth Forms ================= */}
                <section className="flex items-end justify-end h-full">

                    <div className="w-full max-w-2xl bg-gray rounded-t-xl shadow p-6 md:p-8 lg:p-10" data-aos="fade-left"
                        data-aos-delay="150">

                        {children}

                    </div>

                </section>

            </div>

        </main>
    );
}
