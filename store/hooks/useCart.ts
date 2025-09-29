import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    selectCartItems,
    selectCartTotal,
    selectCartTotalPrice,
    selectCartItemCount,
    isInCart
} from "../slices";
import { ProductType, ProductColor } from "@/types";

export const useCart = () => {
    const dispatch = useAppDispatch();
    
    const items = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartTotal);
    const totalPrice = useAppSelector(selectCartTotalPrice);
    const itemCount = useAppSelector(selectCartItemCount);

    const addItem = (product: ProductType, quantity: number = 1, selectedColor?: ProductColor, selectedSize?: string) => {
        dispatch(addToCart({ product, quantity, selectedColor, selectedSize }));
    };

    const removeItem = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const updateItemQuantity = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const clear = () => {
        dispatch(clearCart());
    };

    const checkIfInCart = (productId: string, selectedColor?: ProductColor, selectedSize?: string) => {
        return useAppSelector(isInCart(productId, selectedColor, selectedSize));
    };

    return {
        items,
        total,
        totalPrice,
        itemCount,
        addItem,
        removeItem,
        updateItemQuantity,
        clear,
        checkIfInCart,
    };
};
