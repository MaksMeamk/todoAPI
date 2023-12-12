import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    load: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
    sort: (state) => {
      state.sort((a, b) => a.isCompleted - b.isCompleted);
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    del: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1,
      );
    },
    changeTask: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].title = action.payload.title;
    },
    editReadyStatus: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].isCompleted = !state[index].isCompleted;
    },
    editStatus: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].isEdit = !state[index].isEdit;
    },
  },
});

export const { sort, del, changeTask, editReadyStatus, editStatus, add, load } =
  tasksSlice.actions;
export default tasksSlice.reducer;
