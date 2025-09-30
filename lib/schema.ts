import * as Yup from "yup"

export const EmailSchema = Yup.object({
    email: Yup.string()
        .email("Email address is invalid")
        .required("Email address is required"),
});

export const OtpSchema = Yup.object({
    otp: Yup.string().length(6, "OTP must be 6 digits")
        .required("OTP is required"),
})

export const newPasswordSchema = Yup.object({
    password: Yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirm_password: Yup
        .string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
})

export const authSchema = Yup.object({
    email: Yup
        .string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    password: Yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});