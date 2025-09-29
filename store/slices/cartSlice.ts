import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType, ProductColor } from "@/types";
import { CartItem, CartState } from "@/types/cart";

const initialState: CartState = {
    items: [],
    total: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{
            product: ProductType;
            quantity: number;
            selectedColor?: ProductColor;
            selectedSize?: string;
        }>) {
            const { product, quantity, selectedColor, selectedSize } = action.payload;

            const randomId = Math.random().toString(36).substring(2, 7);
            const timestamp = Date.now().toString().slice(-5);
            const cartItemId = `${randomId}${timestamp}`;

            state.items.push({
                id: cartItemId,
                product,
                quantity,
                selectedColor,
                selectedSize,
                price: product.price,
            });

            state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },

        removeFromCart(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);

                state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
                state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            }
        },

        updateQuantity(state, action: PayloadAction<{
            id: string;
            quantity: number;
        }>) {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                if (quantity <= 0) {
                    const itemIndex = state.items.findIndex(item => item.id === id);
                    state.items.splice(itemIndex, 1);
                } else {
                    item.quantity = quantity;
                }

                state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
                state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            }
        },

        clearCart(state) {
            state.items = [];
            state.total = 0;
            state.totalPrice = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) => state.cart.total;
export const selectCartTotalPrice = (state: { cart: CartState }) => state.cart.totalPrice;
export const selectCartItemCount = (state: { cart: CartState }) => state.cart.items.length;

export const isInCart = (productId: string, selectedColor?: ProductColor, selectedSize?: string) =>
    (state: { cart: CartState }) => {
        return state.cart.items.some(item =>
            item.product.id === productId &&
            (selectedColor ?
                (item.selectedColor?.color === selectedColor.color) :
                true) &&
            (selectedSize ? item.selectedSize === selectedSize : true)
        );
    };

export default cartSlice.reducer;
