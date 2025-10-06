/**
 * Formats a number into a 2-digit string and returns each digit separately.
 * 
 * @param num - The number to format (e.g. 5 becomes '05').
 * @returns A tuple containing the two digits as strings.
 */
export const formatDigits = (num: number): [string, string] => {
    const str = num.toString().padStart(2, "0");
    return [str[0], str[1]];
};

/**
 * Calculates the percentage discount between the original and discounted prices.
 * 
 * @param originalPrice - Original price before discount.
 * @param discountedPrice - Current discounted price.
 * @returns Discount percentage as a whole number. Returns 0 if invalid.
 */
export function getDiscountPercentage(originalPrice: number | string, discountedPrice: number | string): number {
    const original = Number(originalPrice);
    const discounted = Number(discountedPrice);

    if (!original || original <= 0 || discounted >= original) {
        return 0;
    }

    const discount = ((original - discounted) / original) * 100;
    return Math.round(discount);
}

/**
 * Removes keys with empty string or null values from an object.
 * 
 * @param obj - The object to clean.
 * @returns A new object without empty or null fields.
 */
export const removeEmptyFields = (obj: Record<string, unknown>): Record<string, unknown> => {
    return Object.fromEntries(
        Object.entries(obj).filter(([, v]) => v !== "" && v !== null)
    );
};


/**
 * Adds a product to cart with proper color handling and navigation.
 * 
 * @param addItem - The cart add function from useCart hook
 * @param product - The product to add to cart
 * @param quantity - Quantity to add (default: 1)
 * @param selectedColor - Selected color object or color ID
 * @param toast - Toast function for notifications
 * @param navigate - Navigation function (optional)
 * @param shouldNavigate - Whether to navigate to checkout after adding
 */
export const addToCartWithHelper = (
    addItem: (product: any, quantity: number, selectedColor?: any, selectedSize?: string) => void,
    product: any,
    quantity: number = 1,
    selectedColor?: any,
    toast?: (message: string) => void,
    navigate?: (path: string) => void,
    shouldNavigate: boolean = false
) => {
    if (!product || !product.inStock) {
        toast?.("Product is out of stock");
        return;
    }

    // Pass the full color object only
    addItem(product, quantity, selectedColor);
    
    const colorText = selectedColor?.label || "";
    const message = colorText 
        ? `${product.name} (${colorText}) added to cart`
        : `${product.name} added to cart`;
    
    toast?.(message);
    
    if (shouldNavigate && navigate) {
        navigate("/pages/cart/checkout");
    }
};

/**
 * Calculates the time remaining until a target date and returns formatted countdown values.
 * 
 * @param targetDate - The target date string (ISO format) or Date object
 * @returns Object containing days, hours, minutes, seconds, and total milliseconds remaining
 */
export const getCountdown = (targetDate: string | Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    total: number;
    isExpired: boolean;
} => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            total: 0,
            isExpired: true
        };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds,
        total: difference,
        isExpired: false
    };
};

/**
 * Formats countdown values with leading zeros for display.
 * 
 * @param countdown - The countdown object from getCountdown
 * @returns Object with formatted string values for display
 */
export const formatCountdown = (countdown: ReturnType<typeof getCountdown>): {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
} => {
    return {
        days: countdown.days.toString().padStart(2, '0'),
        hours: countdown.hours.toString().padStart(2, '0'),
        minutes: countdown.minutes.toString().padStart(2, '0'),
        seconds: countdown.seconds.toString().padStart(2, '0')
    };
};