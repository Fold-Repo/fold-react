"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui";
import { TruckIcon } from "@heroicons/react/24/outline";

interface DeliveryInformationProps {
    className?: string;
}

const DeliveryInformation: React.FC<DeliveryInformationProps> = ({ className = "" }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Delivery information submitted:", formData);
        // Handle delivery information logic here
    };

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 ${className}`}>
            <div className="flex items-center gap-2 mb-8">
                <TruckIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h2 className="text-left text-base md:text-lg font-semibold">Delivery Information</h2>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                    <Input
                        type="text"
                        name="firstName"
                        label="First name"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />

                    <Input
                        type="text"
                        name="lastName"
                        label="Last name"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />

                    <div className="col-span-2">
                        <Input
                            type="email"
                            name="email"
                            label="Email Address"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <Input
                            type="tel"
                            name="phone"
                            label="Phone Number"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <Input
                            type="text"
                            name="streetAddress"
                            label="Street Address"
                            placeholder="Street Address"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <Input
                        type="text"
                        name="city"
                        label="City"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                    />

                    <Input
                        type="text"
                        name="state"
                        label="State"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                    />

                    <Input
                        type="text"
                        name="zipCode"
                        label="Zip code"
                        placeholder="Zip code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                    />

                    <Input
                        type="text"
                        name="country"
                        label="Country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </form>
        </div>
    );
};

export default DeliveryInformation;
