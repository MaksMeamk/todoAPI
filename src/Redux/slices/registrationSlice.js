import { createSlice } from '@reduxjs/toolkit';

const initialState = { username: '', email: '', password: '', age: '', gender: '' }

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            const [key] = Object.keys(action.payload)
            const [value] = Object.values(action.payload)
            state[key] = value;
        },
    },
});

export const { addUserData } = registrationSlice.actions;
export default registrationSlice.reducer;