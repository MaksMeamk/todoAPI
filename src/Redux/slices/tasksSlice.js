import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        sort: (state, action) => {
            state.length = 0;
            state.push(...action.payload)
        },
        del: (state, action) => {
            state.splice(state.findIndex(item => item.id === action.payload, 1))
        },
        changeTask: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index].title = action.payload.title;
        },
        editReadyStatus: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            state[index].isCompleted = !state[index].isCompleted;

        },
        editStatus: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            state[index].isEdit = !state[index].isEdit;
        },
    },
});

export const { sort, del, changeTask, editReadyStatus, editStatus } = tasksSlice.actions;
export default tasksSlice.reducer;