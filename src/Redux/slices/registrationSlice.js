import { createSlice } from '@reduxjs/toolkit';

const initialState = { username: '', email: '', password: '', age: '', gender: '' }

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            Object.assign(state, action.payload)
        },
    },
});

export const { addUserData } = registrationSlice.actions;
export default registrationSlice.reducer;