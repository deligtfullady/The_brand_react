import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
    setQuantity(state, action) {
      const { id, size, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id && i.size === size);
      if (item) {
        const q = Math.max(1, Number(quantity) || 1);
        item.quantity = q;
      }
    },
    increaseQuantity(state, action) {
      const { id, size } = action.payload;
      const item = state.items.find((i) => i.id === id && i.size === size);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const { id, size } = action.payload;
      const item = state.items.find((i) => i.id === id && i.size === size);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = state.items.filter((i) => !(i.id === id && i.size === size));
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
