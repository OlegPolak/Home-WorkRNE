
import { configureStore } from '@reduxjs/toolkit';
import statsSliсe from './statsSliсe';
import dateSlice from './dateSlice';

export const store = configureStore({
    reducer: {
        stats: statsSliсe,
        date: dateSlice,
    },
});
