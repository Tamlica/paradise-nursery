import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload
      const existing = state.items.find((item) => item.id === plant.id)
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 })
      }
    },
    incrementQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) item.quantity += 1
    },
    decrementQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, incrementQty, decrementQty, removeFromCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
export const selectIsInCart = (id) => (state) => state.cart.items.some((item) => item.id === id)

export default cartSlice.reducer
