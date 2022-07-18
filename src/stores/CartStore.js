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
        }
    }
})

export const { addCart } = cartStore.actions
export default cartStore.reducer