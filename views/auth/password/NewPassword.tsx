import { Button, PasswordInput } from "@/components/ui"
import { newPasswordSchema } from "@/lib/schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { InferType } from "yup"
import PasswordSuccessModal from "./PasswordSuccessModal"

type FormData = InferType<typeof newPasswordSchema>

const NewPassword = () => {

    const [open, setOpen] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: yupResolver(newPasswordSchema) })

    const onSubmit = async (data: FormData) => {
        console.log("Form submitted:", data)
        setOpen(true)
    }

    return (
        <>

            <header className="text-center space-y-2">
                <h2 className="text-2xl font-extrabold">Set New Password</h2>
                <p className="text-gray-500 text-sm lg:text-base">Enter and confirm your new password below.</p>
            </header>

            <form className="my-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <PasswordInput label='Password' placeholder="**************"
                    {...register("password")} error={errors.password?.message} />

                <PasswordInput label='Confirm Password' placeholder="**************"
                    {...register("confirm_password")} error={errors.confirm_password?.message} />

                <Button loading={isSubmitting} type="submit" className="w-full">Reset Password</Button>

            </form>

            <PasswordSuccessModal
                open={open}
                setOpen={setOpen}
            />

        </>
    )
}

export default NewPassword