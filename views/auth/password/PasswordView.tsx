"use client";

import Image from "next/image";
import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import PasswordOTP from "./PasswordOTP";
import NewPassword from "./NewPassword";

// ================= Types =================
type Step = {
    id: string;
    component: React.FC<{ onNextStep: () => void }>;
};


// ================= Steps Array =================
const steps: Step[] = [
    { id: "email", component: ForgotPassword },
    { id: "otp", component: PasswordOTP },
    { id: "newPassword", component: NewPassword },
    { id: "final", component: () => null }
];

export default function PasswordView() {

    const [currentStep, setCurrentStep] = useState<string>("email");

    // ================= Handle Next Step =================
    const handleNextStep = () => {
        const currentIndex = steps.findIndex((step) => step.id === currentStep);
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].id);
        }
    };

    // ================= Render Step Content =================
    const renderStepContent = () => {
        const stepObj = steps.find((s) => s.id === currentStep);
        if (stepObj) {
            const StepComponent = stepObj.component;
            return <StepComponent onNextStep={handleNextStep} />;
        }
        return null;
    };

    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-3 justify-end min-h-screen">

            {/* ================= Left: Steps ================= */}
            <section className="relative flex items-center justify-center px-6 lg:px-12 py-12 2xl:pt-26 text-white 
            bg-brand bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/bg/auth_bg_2.png')" }}>

                {/* ================= Overlay ================= */}
                <div className="absolute inset-0 bg-gradient-to-l from-neutral-800/60 to-neutral-700/50 pointer-events-none z-5" />

                <div className="relative max-w-xl z-5">

                    {/* ================= Logo ================= */}
                    <div className="flex items-center gap-2 mb-12 lg:mb-20">
                        <Image src="/img/logo/logo.svg" alt="Logo" width={40} height={40} className="w-10" />
                        <span className="font-medium tracking-wide italic">
                            Full Logo Goes Here
                        </span>
                    </div>

                    {/* ================= Step Indicators ================= */}
                    <div className="w-full max-w-sm mx-auto">
                        <div className="flex flex-col space-y-10">
                            {steps.map((step, i) => (
                                <StepItem key={step.id} active={steps.findIndex((s) => s.id === currentStep) >= i } 
                                    title={getStepTitle(step.id)} desc={getStepDesc(step.id)} isLast={i === steps.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </section>

            {/* ================= Right: Form Section ================= */}
            <section className="lg:col-span-2 relative flex items-end justify-end inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/img/bg/auth_bg.png')" }}>
                {/* ================= Overlay ================= */}
                <div className="absolute inset-0 bg-gradient-to-l from-neutral-800/60 to-neutral-700/50 pointer-events-none"></div>

                <div className="w-full max-w-2xl mx-auto bg-gray rounded-t-xl shadow py-12 lg:py-20 p-6 md:p-8 lg:p-10 lg:min-h-[75vh]"
                    data-aos="fade-left" data-aos-delay="150">

                    {/* ================= Dynamic Form ================= */}
                    {renderStepContent()}

                </div>

            </section>
            
        </div>
    );
}

// ================= Step Item Component =================
function StepItem({ active, title, desc, isLast }: { active: boolean; title: string; desc: string; isLast: boolean; }) {
    return (
        <div className="flex items-start">

            <div className="flex flex-col items-center">

                <div className={`w-7 h-7 flex items-center justify-center rounded-full border-2 
                    ${active ? "border-white bg-green-600" : "border-white/40" }`}>
                    {active && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>

                {!isLast && (
                    <div className={`w-px flex-1 ${active ? "bg-white" : "bg-white/40"}`} />
                )}

            </div>

            <div className="ml-4">
                <h3 className="text-white text-sm font-semibold">{title}</h3>
                <p className="text-white/80 text-xs">{desc}</p>
            </div>

        </div>
    );
}

// ================= Helper to get step titles & desc =================
function getStepTitle(id: string) {
    switch (id) {
        case "email":
            return "Provide Email";
        case "otp":
            return "OTP";
        case "newPassword":
            return "Set New Password";
        case "final":
            return "FINAL STEP";
        default:
            return "";
    }
}

function getStepDesc(id: string) {
    switch (id) {
        case "email":
            return "Enter your email Address";
        case "otp":
            return "Verify OTP";
        case "newPassword":
            return "Enter new Password you want to use";
        case "final":
            return "Log in to your account with your new password";
        default:
            return "";
    }
}
