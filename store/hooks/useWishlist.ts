import { useAppDispatch, useAppSelector } from "../hooks";
import { 
    addToWishlist, 
    removeFromWishlist, 
    clearWishlist,
    selectWishlist,
    selectWishlistCount,
    isInWishlist
} from "../slices";
import { ProductType } from "@/types";

export const useWishlist = () => {
    const dispatch = useAppDispatch();
    
    const items = useAppSelector(selectWishlist);
    const total = useAppSelector(selectWishlistCount);

    const addItem = (product: ProductType) => {
        dispatch(addToWishlist(product));
    };

    const removeItem = (productId: string | number) => {
        dispatch(removeFromWishlist(productId));
    };

    const clear = () => {
        dispatch(clearWishlist());
    };

    const checkIfInWishlist = (productId: string | number) => {
        return items.some(item => item.id === productId);
    };

    const toggleWishlist = (product: ProductType) => {
        const isInList = items.some(item => item.id === product.id);
        if (isInList) {
            removeItem(product.id);
        } else {
            addItem(product);
        }
    };

    return {
        items,
        total,
        addItem,
        removeItem,
        clear,
        checkIfInWishlist,
        toggleWishlist,
    };
};
