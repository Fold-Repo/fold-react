export { default as cartReducer } from "./cartSlice";
export { default as wishlistReducer } from "./wishlistSlice";

// Cart actions and selectors
export {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    selectCartItems,
    selectCartTotal,
    selectCartTotalPrice,
    selectCartItemCount,
    isInCart,
} from "./cartSlice";

// Wishlist actions and selectors
export {
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    selectWishlist,
    selectWishlistCount,
    isInWishlist,
} from "./wishlistSlice";
