import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

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
    reducers: {
        addNumber: (state, action: PayloadAction<string>) => {
            if (state.status != 'initial') {
                state.status = 'initial';
            }
            if (state.currentPassword.length < 4) {
                state.currentPassword += action.payload;
            }
        },

        deleteNumber: (state) => {
            state.status = 'initial';
            state.currentPassword = state.currentPassword.slice(0, -1);
        },

        submitPassword: (state) => {
            if (state.currentPassword === state.correctPassword) {
                state.status = 'granted';
            } else {
                state.status = 'denied';
            }
        }
    }
});

export const {addNumber, deleteNumber, submitPassword} = doorCodeSlice.actions;
export const doorCodeReducer = doorCodeSlice.reducer;
