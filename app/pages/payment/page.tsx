import PaymentView from "@/views/pages/payment/PaymentView";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Payment",
};

export default function page() {
    return <PaymentView />
}
