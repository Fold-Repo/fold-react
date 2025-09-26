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
 * Merges product images and color swatch images into a unique image list.
 * 
 * @param images - Regular product image URLs.
 * @param colors - Array of color objects containing `image` URLs.
 * @returns An array of unique image URLs.
 */
export const getUniqueProductImages = (
    images: string[] = [],
    colors: { image: string }[] = []
): string[] => {
    const colorImages = colors.map((c) => c.image);
    const filteredImages = images.filter((img) => !colorImages.includes(img));
    return [...filteredImages, ...colorImages];
};
