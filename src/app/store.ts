import {configureStore} from '@reduxjs/toolkit';
import {doorCodeReducer} from "../containers/DoorCode/DoorCodeSlice.ts";

export const store = configureStore({
    reducer: {
        doorCode: doorCodeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;