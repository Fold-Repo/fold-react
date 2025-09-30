"use client";

import React, { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Breadcrumb } from "@/components";
import PaymentStepOne from "./PaymentStepOne";
import PaymentStepTwo from "./PaymentStepTwo";
import PaymentStepThree from "./PaymentStepThree";

// ================= Types =================
type Step = {
    id: string;
    component: React.FC<any>;
};

// ================= Steps Array =================
const steps: Step[] = [
    { id: "payment", component: PaymentStepOne },
    { id: "otp", component: PaymentStepTwo },
    { id: "success", component: PaymentStepThree },
];

const PaymentView = () => {

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

            <div className="container section-md space-y-10">

                <div className="container mx-auto px-4">

                    {renderStepContent()}

                </div>

            </div>

            <Footer />

        </>
    );
};

export default PaymentView;