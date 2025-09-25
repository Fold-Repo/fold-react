import { Button } from "@/components/ui"
import OtpInput from "react-otp-input";
import Link from "next/link"
import React, { useState } from "react"
import { OtpSchema } from "@/lib/schema";
import { InferType } from "yup";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ErrorMessage } from "@/components/ui/form";

type OtpForm = InferType<typeof OtpSchema>

const PasswordOTP = ({ onNextStep }: { onNextStep: () => void }) => {

    const { control, handleSubmit, formState: { errors, isSubmitting },
    } = useForm<OtpForm>({
        resolver: yupResolver(OtpSchema),
        defaultValues: { otp: "" },
    })

    const onSubmit = async (data: OtpForm) => {
        console.log("OTP submitted:", data)
        onNextStep()
    }

    return (
        <>

            <header className="text-center space-y-2">
                <h2 className="text-2xl font-extrabold">Enter OTP</h2>
                <p className="text-gray-500 text-sm lg:text-base">
                    An OTP has been sent to your email address. Enter the OTP to reset your password.
                </p>
            </header>

            <form className="my-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    control={control}
                    name="otp"
                    render={({ field }) => (
                        <div className="flex flex-col items-center">
                            <OtpInput
                                value={field.value}
                                onChange={field.onChange}
                                inputType="tel"
                                numInputs={6}
                                inputStyle={{ width: "55px", height: "55px" }}
                                containerStyle="flex items-center gap-x-1 sm:gap-x-2 justify-center"
                                renderInput={(props, index) => (
                                    <React.Fragment key={index}>
                                        <input {...props} className="form-control max-w-12 max-h-12 text-lg font-semibold text-dark" />
                                        {index === 2 && <span className="mx-2 hidden md:block">-</span>}
                                    </React.Fragment>
                                )}
                            />
                            <ErrorMessage error={errors.otp?.message} />
                        </div>
                    )}
                />

                <Button loading={isSubmitting} type="submit" className="w-full">Verify OTP</Button>

            </form>

            <Link className="flex justify-center text-brand dark:text-blue-400 text-sm" href="javascript:void(0)">
                Resend OTP
            </Link>

        </>
    )
}

export default PasswordOTP