import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartStore = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeCartItem: (state, action) => {
            state.cart.splice(action.payload, 1)
        }
    }
})

export const { addCart, removeCartItem } = cartStore.actions
export default cartStore.reducer