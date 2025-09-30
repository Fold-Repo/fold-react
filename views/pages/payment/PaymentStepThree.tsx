"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

interface PaymentStepThreeProps {
    onNextStep?: () => void;
    onPrevStep?: () => void;
}

const PaymentStepThree: React.FC<PaymentStepThreeProps> = ({ onNextStep, onPrevStep }) => {
    const router = useRouter();

    const handleViewOrder = () => {
        // router.push('/pages/orders');
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl px-4 sm:px-5 py-10 max-w-2xl mx-auto"
            data-aos="zoom-in" data-aos-delay="150" data-aos-duration="400">

            <div className="max-w-xl mx-auto space-y-10">

                {/* ================= SUCCESS HEADER ================= */}
                <header className="text-center space-y-4">
                    <Image
                        width={144}
                        height={144}
                        className="w-22 mx-auto"
                        src="/img/congrats.svg"
                        alt="Congratulations"
                    />
                    <p className="text-gray-900 dark:text-gray-100 text-base lg:text-lg font-medium">
                        You have successfully made a payment for your order. You can view your order now.
                    </p>
                </header>

                {/* ================= ACTION BUTTONS ================= */}
                <Button type="button" variant="brand"
                    size="md" fullWidth onClick={handleViewOrder} className="rounded-lg">
                    View Order
                </Button>

            </div>

        </div>
    );
};

export default PaymentStepThree;
