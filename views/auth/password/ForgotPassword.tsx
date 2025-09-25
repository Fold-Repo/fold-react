import { Button, Input } from "@/components/ui"
import { EmailSchema } from "@/lib/schema"
import Link from "next/link"
import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

type FormData = {
    email: string;
};

const ForgotPassword = ({ onNextStep }: { onNextStep: () => void }) => {

    const { register, handleSubmit, formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: yupResolver(EmailSchema) })

    const onSubmit = async (data: FormData) => {
        console.log("Form submitted:", data)
        onNextStep()
    }

    return (
        <>

            <header className="text-center space-y-2">
                <h2 className="text-2xl font-extrabold">Forgot Password?</h2>
                <p className="text-gray-500 text-sm lg:text-base">Enter your email address to receive a password reset link.</p>
            </header>

            <form className="my-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <Input type="email" label="Email Address" 
                    placeholder="Email Address" {...register("email")} 
                    error={errors.email?.message} />

                <Button loading={isSubmitting} type="submit" className="w-full">Proceed</Button>

            </form>

            <p className="text-center text-neutral-600 dark:text-gray-300 text-sm">Remember your password?
                <Link className="text-brand dark:text-blue-400 hover:underline" href="/signin">Sign In</Link>
            </p>

        </>
    )
}

export default ForgotPassword