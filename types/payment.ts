export interface PaymentMethod {
    id: string;
    name: string;
    icon: string;
    alt: string;
}

export interface CardFormData {
    cardNumber: string;
    cardholder: string;
    expiryDate: string;
    cvv: string;
}

export type PaymentOption = "card" | "delivery";

export type PaymentMethodType = "credit-card" | "paypal" | "apple-pay" | "google-pay";

export interface PaymentMethodsProps {
    variant?: "v1" | "v2";
    selectedMethod?: PaymentMethodType;
    onMethodSelect?: (methodId: PaymentMethodType) => void;
    className?: string;
}

export interface PayWithOptionsProps {
    selectedOption?: PaymentOption;
    onOptionChange?: (option: PaymentOption) => void;
    className?: string;
}

export interface CardPaymentsProps {
    showButton?: boolean;
    buttonText?: string;
    buttonVariant?: "brand" | "outline" | "ghost";
    buttonSize?: "sm" | "md" | "lg";
    onSubmit?: (formData: CardFormData) => void;
    className?: string;
    initialData?: Partial<CardFormData>;
}

export interface PaymentOTPProps {
    onSubmit?: (data: { otp: string }) => void;
    onResendOtp?: () => void;
}
