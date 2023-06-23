import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload // si usa payload perchè è di default (di react toolkit) il valore che passiamo alla funzione quando viene chiamata
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;