import PaymentV2View from "@/views/pages/payment/v2/PaymentV2View";
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Payment V2",
};

export default function page() {
    return <PaymentV2View />
}
