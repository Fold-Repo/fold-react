"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

interface SuccessV2StepProps {
    onNextStep?: () => void;
    onPrevStep?: () => void;
}

const SuccessV2Step: React.FC<SuccessV2StepProps> = () => {
    const router = useRouter();

    const handleViewOrder = () => {
        // router.push('/pages/orders');
    };

    return (
        <div className="md:p-5">
            <div className="max-w-xl mx-auto space-y-10">
                <header className="text-center space-y-4">
                    <Image 
                        width={144} 
                        height={144} 
                        className="w-22 mx-auto" 
                        src="/img/congrats.svg"
                        alt="Congratulations" 
                    />
                    <p className="text-gray-900 text-base lg:text-lg font-medium">
                        You have successfully made a payment for your order. You can view your order now.
                    </p>
                </header>
                <div className="space-y-3">
                    <Button 
                        type="button" 
                        variant="brand" 
                        size="lg" 
                        fullWidth 
                        onClick={handleViewOrder}
                    >
                        View Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SuccessV2Step;
