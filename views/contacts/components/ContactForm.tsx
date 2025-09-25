import { Button, Input, TextArea } from "@/components/ui"
import { cn } from "@/lib"
import React from "react"

type ContactFormProps = {
    className?: string
    variant?: "default" | "light"
}

const ContactForm = ({ className, variant = "default" }: ContactFormProps) => {
    return (
        <div className={cn(
            "px-6 py-12 rounded-xl space-y-10",
            variant === "default" && "bg-brand dark:bg-gray-800",
            variant === "light" && "bg-brand/3 dark:bg-gray-800",
            className
        )} data-aos="fade-left" data-aos-delay="150">

            <h2 className={cn(
                "text-xl lg:text-2xl font-semibold text-center",
                variant === "default" && "text-white dark:text-gray-200",
                variant === "light" && "text-gray-900 dark:text-gray-200"
            )}>
                Get In Touch
            </h2>

            <form className="space-y-4" action="#" method="post">

                <Input label="Name" name="name" placeholder="Full name"
                    labelClassName={cn(variant === "default" && "!text-white")} />

                <Input type="email" label="Email" name="email" placeholder="Email address"
                    labelClassName={cn(variant === "default" && "!text-white")} />

                <TextArea label="Message" name="message" placeholder="Tell us about yourself..."
                    inputSize="lg" labelClassName={cn(variant === "default" && "!text-white")} />

                <Button type="submit" variant={variant === "default" ? "light" : "brand"} className={cn(
                    "w-full mt-8 !rounded-xl",
                    variant === "default" && "!text-brand dark:!text-white",
                    variant === "light" && "dark:!text-white"
                )} >
                    Send Message
                </Button>

            </form>

        </div>
    )
}

export default ContactForm
