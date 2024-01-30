import { createSlice } from '@reduxjs/toolkit';

const UISlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const uiActions = UISlice.actions;

export default UISlice;