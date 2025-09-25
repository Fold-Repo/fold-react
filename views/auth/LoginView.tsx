"use client"

import { Button, Checkbox, Input, PasswordInput, SocialLoginButton } from "@/components/ui"
import Link from "next/link"
import React from "react"

const LoginView = () => {
    return (
        <>

            {/*  ================= Form Header ================= */}
            <header className="text-center space-y-2">
                <h2 className="text-2xl font-extrabold">Welcome Back!</h2>
                <p className="text-gray-500 text-sm lg:text-base">Sign in to continue to your account.</p>
            </header>

            {/* ================= Registration Form ================= */}
            <form className="my-10 space-y-4" action="">

                <Input type="email" name="email" label='Email address' placeholder="Email address" />

                <PasswordInput name="password" label='Password' placeholder="**************" />

                <div className="flex items-center justify-between gap-3 mb-8">

                    <Checkbox name='remember' label="Remember me" />

                    <Link className="text-brand dark:text-blue-400 text-sm"
                        href="/forgot-password">Forgot your Password?</Link>

                </div>

                <Button type="submit" className="w-full">Sign In</Button>

            </form>

            {/* ================= Social Media Button =================  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <SocialLoginButton logo="/icon/google.svg" alt="Google" text="Log in with Google"
                    onClick={() => console.log("Google login clicked")} />

                <SocialLoginButton logo="/icon/facebook.svg" alt="Google" text="Log in with Google"
                    onClick={() => console.log("Facebook login clicked")} />

            </div>

            <p className="text-center text-neutral-600 dark:text-gray-300 text-sm mt-12 lg:mt-20">
                New User?
                <Link className="text-accent hover:underline" href="/signup">{" "}Sign Up Here.</Link>
            </p>

        </>
    )
}

export default LoginView