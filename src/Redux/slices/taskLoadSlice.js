import { createSlice } from '@reduxjs/toolkit';



const taskLoadSlice = createSlice({
    name: 'taskLoad',
    initialState: false,
    reducers: {
        changeStatusLoad: (state) => {
            state = !state;
        },
    },
});

export const { changeStatusLoad } = taskLoadSlice.actions;
export default taskLoadSlice.reducer;