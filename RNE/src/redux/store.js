
import { configureStore } from '@reduxjs/toolkit';
import statsSliсe from './statsSliсe';

export const store = configureStore({
    reducer: {
        stats: statsSliсe,
    },
});
