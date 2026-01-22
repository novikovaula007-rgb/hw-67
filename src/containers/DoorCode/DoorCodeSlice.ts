import {createSlice} from "@reduxjs/toolkit";

interface DoorCodeState {
    currentPassword: string,
    correctPassword: string,
    status: 'initial' | 'granted' | 'denied',
}

const initialState: DoorCodeState = {
    currentPassword: '',
    correctPassword: '3492',
    status: 'initial',
};

export const doorCodeSlice = createSlice({
    name: 'doorCode',
    initialState,
    reducers: {}
});

export default doorCodeSlice.reducer;