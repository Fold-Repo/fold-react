"use client";

import React from "react";

interface StepperStep {
    id: string;
    label: string;
    isActive?: boolean;
    isCompleted?: boolean;
}

interface StepperProps {
    steps: StepperStep[];
    currentStep?: string;
    className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
    steps,
    currentStep,
    className = ""
}) => {
    const getStepStatus = (step: StepperStep, index: number) => {
        
        const currentIndex = steps.findIndex(s => s.id === currentStep);
        
        if (step.isCompleted || index < currentIndex) {
            return "completed";
        } else if (step.isActive || step.id === currentStep) {
            return "active";
        } else {
            return "pending";
        }
    };

    const getStepClasses = (status: string) => {
        switch (status) {
            case "completed":
            case "active":
                return "bg-[#4BAF47] font-medium text-white";
            case "pending":
            default:
                return "bg-gray-100 font-medium text-gray-800 dark:bg-neutral-700 dark:text-white";
        }
    };

    const getLabelClasses = (status: string) => {
        switch (status) {
            case "active":
                return "text-brand dark:text-blue-500";
            case "completed":
            case "pending":
            default:
                return "text-gray-800 dark:text-white";
        }
    };

    return (
        <ul className={`relative flex flex-row gap-x-2 ${className}`}>
            {steps.map((step, index) => {
                const status = getStepStatus(step, index);
                const isLast = index === steps.length - 1;
                const isFirst = index === 0;
                const isMiddle = index === 1;
                
                return (
                    <li key={step.id} className={isLast ? "shrink basis-0 flex-1 group" : "w-full"}>
                        <div className="w-full inline-flex items-center text-xs align-middle">
                            <span className={`size-6 flex justify-center items-center ${isLast ? "shrink-0" : ""} ${getStepClasses(status)} rounded-full`}>
                                {index + 1}
                            </span>
                            {!isLast && (
                                <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                            )}
                        </div>
                        <div className={`mt-2 ${isFirst ? "-mx-4" : isMiddle ? "-mx-6" : "-mx-6"}`}>
                            <span className={`block text-xs font-medium ${getLabelClasses(status)}`}>
                                {step.label}
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
