"use client";

import { PaymentOTP } from "@/components";
import React from "react";

interface OTPV2StepProps {
    onNextStep?: () => void;
    onPrevStep?: () => void;
}

const OTPV2Step: React.FC<OTPV2StepProps> = ({ onNextStep, onPrevStep }) => {

    const handleOTPSubmit = (data: { otp: string }) => {
        console.log("OTP submitted:", data.otp);
        onNextStep?.();
    };

    const handleResendOTP = () => {
        console.log("Resend OTP requested");
    };

    return (
        <div className="max-w-lg mx-auto md:p-5">
            
            <PaymentOTP
                onSubmit={handleOTPSubmit}
                onResendOtp={handleResendOTP}
            />

        </div>
    );
};

export default OTPV2Step;
