import { createSlice } from '@reduxjs/toolkit';



const taskLoadSlice = createSlice({
    name: 'taskLoad',
    initialState: {},
    reducers: {
        changeStatusLoad: (state) => {
            state.load = !state.load;
        },
    },
});

export const { changeStatusLoad } = taskLoadSlice.actions;
export default taskLoadSlice.reducer;