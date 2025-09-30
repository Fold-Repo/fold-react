"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { authSchema } from "@/lib/schema";
import { AuthType } from "@/types";

const CheckoutAuth = () => {

    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AuthType>({
        resolver: yupResolver(authSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: AuthType) => {
        try {
            console.log("Auth form submitted:", data);
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };

    const handleSignUpClick = () => {
        router.push("/signup");
    };

    return (
        <div className="space-y-5">
            
            {/* ================= SIGN UP ================= */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5">
                <p className="text-gray-900 text-sm">
                    Don&apos;t Have an account? 
                    <button  onClick={handleSignUpClick} className="text-brand dark:text-blue-500 mx-1 hover:underline">
                        Sign Up
                    </button>
                </p>
            </div>

            {/* ================= LOGIN ================= */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-6">

                <p className="text-gray-900 text-sm">
                    Already have an account?
                </p>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Input
                                {...register("email")}
                                type="email"
                                label="Email"
                                placeholder="Email address"
                                error={errors.email?.message}
                            />
                        </div>

                        <div>
                            <Input
                                {...register("password")}
                                type="password"
                                label="Password"
                                placeholder="**************"
                                error={errors.password?.message}
                            />
                        </div>

                        <div className="col-span-2">
                            <Button 
                                type="submit" 
                                variant="brand" 
                                size="lg" 
                                fullWidth
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </Button>
                        </div>
                    </div>
                </form>

            </div>
            
        </div>
    );
};

export default CheckoutAuth;
