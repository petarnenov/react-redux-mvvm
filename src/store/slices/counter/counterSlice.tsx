import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/store/store';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter(state, action) {
            state.value = action.payload;
        },
        resetCounter(state) {
            return initialState;
        }
    }
});

export const { setCounter, resetCounter } = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
