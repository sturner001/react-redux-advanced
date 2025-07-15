import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        AddItem(state, action) {
            const itemToAdd = action.payload;
            state.totalQuantity++;
            const existingItem = state.items.find(item => item.id == itemToAdd.id);
            if (!existingItem) {
                state.items.push({
                    id: itemToAdd.id,
                    price: itemToAdd.price,
                    totalPrice: itemToAdd.price,
                    quantity: 1,
                    title: itemToAdd.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + itemToAdd.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find(item => item.id == id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        },
        purchase() { }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;