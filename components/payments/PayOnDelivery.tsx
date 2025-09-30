"use client";

import React from "react";

interface PayOnDeliveryProps {
    className?: string;
}

const PayOnDelivery: React.FC<PayOnDeliveryProps> = ({ className = "" }) => {
    return (
        <div className={`p-6 bg-gray-50 dark:bg-gray-700 rounded-lg ${className}`}>
            <h3 className="text-lg font-semibold mb-2">Pay on Delivery</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You can pay with cash or card when your order is delivered.
                Our delivery person will collect the payment at your doorstep.
            </p>
            <div className="space-y-3 text-xs text-gray-600 dark:text-gray-400">
                <p>• Cash payment accepted</p>
                <p>• Card payment accepted (POS available)</p>
                <p>• No additional charges</p>
            </div>
        </div>
    );
};

export default PayOnDelivery;
