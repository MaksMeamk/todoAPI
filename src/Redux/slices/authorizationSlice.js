import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: '', password: '' }

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        addDataAthorization: (state, action) => {
            const [key] = Object.keys(action.payload)
            const [value] = Object.values(action.payload)
            state[key] = value;
        },
    },
});

export const { addDataAthorization } = authorizationSlice.actions;
export default authorizationSlice.reducer;