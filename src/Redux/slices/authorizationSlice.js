import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: '', password: '' }

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        addDataAthorization: (state, action) => {
            Object.assign(state, action.payload)
        },
    },
});

export const { addDataAthorization } = authorizationSlice.actions;
export default authorizationSlice.reducer;