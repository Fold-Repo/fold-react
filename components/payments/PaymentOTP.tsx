"use client";

import React from "react";
import { Button } from "@/components/ui";
import OtpInput from "react-otp-input";
import { OtpSchema } from "@/lib/schema";
import { InferType } from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentOTPProps } from "@/types";
import { ErrorMessage } from "../ui/form";

type OtpForm = InferType<typeof OtpSchema>;

export const PaymentOTP: React.FC<PaymentOTPProps> = ({
    onSubmit,
    onResendOtp,
}) => {

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<OtpForm>({
        resolver: yupResolver(OtpSchema),
        defaultValues: { otp: "" },
    });

    const handleFormSubmit = async (data: OtpForm) => {
        console.log("Payment OTP submitted:", data);
        onSubmit?.(data);
    };

    const handleResend = () => {
        console.log("Resend OTP requested");
        onResendOtp?.();
    };

    return (
        <>

            {/* ================= Form Header ================= */}
            <header className="max-w-md mx-auto text-center space-y-2 mb-10">
                <p className="text-gray-900 text-base lg:text-lg font-medium">
                    Please enter the OTP sent to your email or phone to complete your order.
                </p>
            </header>

            {/* ================= OTP Form ================= */}
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>

                <Controller
                    control={control}
                    name="otp"
                    render={({ field }) => (
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center gap-x-2 px-5">
                                <OtpInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    inputType="tel"
                                    numInputs={6}
                                    inputStyle={{
                                        width: "40px",
                                        height: "40px",
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        textAlign: "center"
                                    }}
                                    containerStyle="flex items-center gap-x-2 justify-center"
                                    renderInput={(props, index) => (
                                        <React.Fragment key={index}>
                                            <input
                                                {...props}
                                                className="form-control size-10 md:!size-12 text-center !text-sm 
                                                font-semibold text-dark border-gray-300 focus:border-brand focus:ring-brand"
                                                placeholder="0"
                                            />
                                            {index === 2 && <span className="mx-2 hidden md:block text-gray-400">-</span>}
                                        </React.Fragment>
                                    )}
                                />
                            </div>
                            <ErrorMessage error={errors.otp?.message} />
                        </div>
                    )}
                />

                <Button loading={isSubmitting} type="submit" variant="brand" fullWidth 
                size="lg" className="rounded-lg mt-3">
                    Submit OTP
                </Button>

            </form>

            {/* ================= Resend OTP ================= */}
            <div className="flex justify-center mt-6">
                <button type="button" onClick={handleResend} className="cursor-pointer text-brand dark:text-blue-400
                    text-xs hover:underline" >
                    Reset OTP
                </button>
            </div>

        </>
    );
};
