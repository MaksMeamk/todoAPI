import { createSlice } from '@reduxjs/toolkit';
import { fetchRegistration } from '../../Requests';


const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        status: '',
        error: null,
        data: { username: '', email: '', password: '', age: '', gender: '' }
    },
    // reducers: {
    //     addUserData: (state, action) => {
    //         Object.assign(state, action.payload)
    //     },
    // },
    extraReducers: {
        [fetchRegistration.pedding]: (state) => {
            state.status = 'loading';
        },
        [fetchRegistration.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            Object.assign(state.data, action.payload.data)
        },
        [fetchRegistration.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action;
            handlingError(state.error)
        }
    }
});


export default registrationSlice.reducer;