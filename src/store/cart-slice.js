import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const exist = state.items.find(item => item.id === newItem.id)
            if (!exist) {
                state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price })
                state.totalQuantity++;
            }
        },
        removeItemFromCart(state, action) {
            const filtered = state.items.filter(item => item.id !== action.payload)
            state.items = filtered;
            state.totalQuantity--;
        },
        increaseQuantity(state, action) {
            const newItem = action.payload
            const exist = state.items.find(item => item.id === newItem.id)
            exist.quantity++;
            exist.totalPrice = exist.totalPrice + newItem.totalPrice
        },
        decreaseQuantity(state, action) {
            const newItem = action.payload
            const exist = state.items.find(item => item.id === newItem.id)
            if (exist.quantity > 1) {
                exist.quantity--;
                exist.totalPrice = exist.totalPrice - newItem.totalPrice
            }

        }
    }
})

export default cartSlice.reducer
export const cartAction = cartSlice.actions