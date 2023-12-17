import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthorization } from '../../Requests';



const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        status: '',
        error: null,
        data: { email: '', password: '' }
    },

    // reducers: {
    //     addDataAthorization: (state, action) => {
    //         Object.assign(state, action.payload)
    //     },
    // },
    extraReducers: {
        [fetchAuthorization.pedding]: (state) => {
            state.status = 'loading';
        },
        [fetchAuthorization.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            Object.assign(state.data, action.payload.data)

        },
        [fetchAuthorization.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action;
            handlingError(state.error)
        }
    }
});

export default authorizationSlice.reducer;