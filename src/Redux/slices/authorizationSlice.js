import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthorization, } from '../../Requests';
import { useNavigate, Link } from "react-router-dom";

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        status: '',
        error: null,
        data: { email: '', password: '' }
    },

    extraReducers: {
        [fetchAuthorization.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAuthorization.fulfilled]: (state, action) => {
            const navigate = useNavigate();
            state.status = 'succeeded';
            Object.assign(state.data, action.payload.data)
            navigate("/tasks");

        },
        [fetchAuthorization.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error;
            console.log("fetchAuthorization.rejected", action);
        }
    }
});

export default authorizationSlice.reducer;