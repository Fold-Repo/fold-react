"use client";

import React, { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Breadcrumb, Stepper } from "@/components";
import PaymentV2StepOne from "./PaymentV2StepOne";
import OTPV2Step from "./OTPV2Step";
import SuccessV2Step from "./SuccessV2Step";

// ================= Types =================
type Step = {
    id: string;
    component: React.FC<any>;
};

// ================= Steps Array =================
const steps: Step[] = [
    { id: "payment", component: PaymentV2StepOne },
    { id: "otp", component: OTPV2Step },
    { id: "success", component: SuccessV2Step },
];

// ================= Stepper Steps =================
const stepperSteps = [
    { id: "payment", label: "Check Out" },
    { id: "otp", label: "Payment Method" },
    { id: "success", label: "Confirmation" },
];

const PaymentV2View = () => {

    const [currentStep, setCurrentStep] = useState<string>("payment");

    // ================= Handle Next Step =================
    const handleNextStep = () => {
        const currentIndex = steps.findIndex((step) => step.id === currentStep);
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].id);
        }
    };

    // ================= Handle Previous Step =================
    const handlePrevStep = () => {
        const currentIndex = steps.findIndex((step) => step.id === currentStep);
        if (currentIndex > 0) {
            setCurrentStep(steps[currentIndex - 1].id);
        }
    };

    // ================= Render Step Content =================
    const renderStepContent = () => {
        const stepObj = steps.find((s) => s.id === currentStep);
        if (stepObj) {
            const StepComponent = stepObj.component;
            return <StepComponent onNextStep={handleNextStep} onPrevStep={handlePrevStep} />;
        }
        return null;
    };

    return (
        <>

            <Header />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Shopping", href: "/products" },
                    { label: "Cart", href: "/pages/cart" },
                    { label: "Checkout", href: "/pages/cart/checkout" },
                    { label: "Payment", isActive: true }
                ]}
                separator={<span className="text-gray-400">/</span>}
                variant='center'
            />

            <main className="container section-lg space-y-10">

                <div className="bg-white dark:bg-gray-800 rounded-xl px-5 md:px-6 py-10 max-w-full md:max-w-5xl mx-auto">

                    <div className="max-w-full md:max-w-3xl mx-auto space-y-12">

                        {/* ================= STEPPER ================= */}
                        <Stepper steps={stepperSteps}
                            currentStep={currentStep}
                        />

                        {renderStepContent()}

                    </div>

                </div>

            </main>

            <Footer />

        </>
    );
};

export default PaymentV2View;