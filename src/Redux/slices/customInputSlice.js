import { createSlice } from '@reduxjs/toolkit';



const customInputSlice = createSlice({
    name: 'customInput',
    initialState: '',
    reducers: {
        addTitle: (state, action) => {
            return action.payload;
        },
    },
});

export const { addTitle } = customInputSlice.actions;
export default customInputSlice.reducer;