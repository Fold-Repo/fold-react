import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types";
import { WishlistState } from "@/types/wishlist";

const initialState: WishlistState = {
    items: [],
    total: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action: PayloadAction<ProductType>) {
            const exists = state.items.some(item => item.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
                state.total += 1;
            }
        },

        removeFromWishlist(state, action: PayloadAction<number | string>) {
            const newItems = state.items.filter(item => item.id !== action.payload);
            state.items = newItems;
            state.total = newItems.length;
        },

        clearWishlist(state) {
            state.items = [];
            state.total = 0;
        },
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
} = wishlistSlice.actions;

export const selectWishlist = (state: { wishlist: WishlistState }) => state.wishlist.items;

export const selectWishlistCount = (state: { wishlist: WishlistState }) => state.wishlist.total;

export const isInWishlist = (productId: number | string) => (state: { wishlist: WishlistState }) =>
    state.wishlist.items.some(item => item.id === productId);

export default wishlistSlice.reducer;
