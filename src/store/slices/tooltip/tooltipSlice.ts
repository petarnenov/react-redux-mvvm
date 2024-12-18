import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/store/store';

interface TooltipState {
    value: string;
}

const initialState: TooltipState = {
    value: ''
};

const tooltipSlice = createSlice({
    name: 'tooltip',
    initialState,
    reducers: {
        setTooltip(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setTooltip: setDate } = tooltipSlice.actions;
export const selectTooltip = (state: RootState) => state.tooltip.value;
export default tooltipSlice.reducer;
