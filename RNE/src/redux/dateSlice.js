import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: 'date',
    initialState: [],
    reducers: {
        changeDate(state, action) {
            state = action.payload;
            console.log('initialState', state);
        },
    },
});

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;
