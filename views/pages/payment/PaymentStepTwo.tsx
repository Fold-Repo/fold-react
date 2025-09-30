"use client";

import { PaymentOTP } from "@/components";
import React from "react";

interface PaymentStepTwoProps {
    onNextStep?: () => void;
    onPrevStep?: () => void;
}

const PaymentStepTwo: React.FC<PaymentStepTwoProps> = ({ onNextStep, onPrevStep }) => {
    
    const handleOTPSubmit = (data: { otp: string }) => {
        console.log("OTP submitted:", data.otp);
        // Move to next step after OTP verification
        onNextStep?.();
    };

    const handleResendOTP = () => {
        console.log("Resend OTP requested");
        // Handle resend OTP logic
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl px-4 sm:px-5 py-10 max-w-2xl mx-auto">

            <PaymentOTP 
                onSubmit={handleOTPSubmit}
                onResendOtp={handleResendOTP}
            />

        </div>
    );
};

export default PaymentStepTwo