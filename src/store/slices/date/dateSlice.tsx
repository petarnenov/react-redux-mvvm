import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { RootState } from '~/store/store';

interface DateState {
    value: string;
}

const initialState: DateState = {
    value: moment().toDate().toString()
};

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDate(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setDate } = dateSlice.actions;
export const selectDate = (state: RootState) => state.date.value;
export default dateSlice.reducer;
