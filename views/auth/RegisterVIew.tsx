"use client"

import { Button, Checkbox, Input, PasswordInput } from "@/components/ui"
import Link from "next/link"
import React from "react"

const RegisterVIew = () => {
    return (
        <>

            {/*  ================= Form Header ================= */}
            <header className="text-center space-y-2">
                <h2 className="text-2xl font-extrabold">Get Started Here!</h2>
                <p className="text-gray-500 text-sm lg:text-base">Be a part of the community of shoppers starting now.</p>
            </header>

            {/* ================= Registration Form ================= */}
            <form className="my-10 space-y-4" action="">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Input type="text" name="first_name" label="First Name" placeholder="First Name" />

                    <Input type="text" name="last_name" label="Last Name" placeholder="Last Name" />

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Input type="tel" name="phone" label="Phone Number" placeholder="Phone Number" />

                    <Input type="email" name="email" label="Email address" placeholder="Email address" />

                </div>

                <PasswordInput name="password" label='Password' placeholder="**************" />

                <PasswordInput name="confirm_password" label='Confirm Password' placeholder="**************" />

                <Checkbox name='remember' label="Send important information and login
                                details to the provided email address for documentation." />

                <Button type="submit" className="w-full mt-8">Register</Button>

            </form>


            <p className="text-center text-neutral-600 dark:text-gray-300 text-sm mt-12 lg:mt-20">
                Already have an account?
                <Link className="text-accent hover:underline" href="/signin">{" "}Sign In.</Link>
            </p>

        </>
    )
}

export default RegisterVIew