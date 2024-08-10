import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const itemInCart = state.items.find(item => item.name === name);
        if (itemInCart) {
            itemInCart.quanity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        const {name} = action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const itemInCart = state.items.find(item => item.name === name);
        if (itemInCart) {
            itemInCart.quanity = quanity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
