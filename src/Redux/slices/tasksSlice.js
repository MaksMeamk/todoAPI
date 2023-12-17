import { createSlice } from "@reduxjs/toolkit";
import { fetchLoadTasks, handlingError } from "../../Requests";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    status: '',
    error: null,
    data: []
  },
  reducers: {
    // load: (state, action) => {
    //   state.data.length = 0;
    //   state.data.push(...action.payload);
    // },
    // sort: (state) => {
    //   state.data.sort((a, b) => a.isCompleted - b.isCompleted);
    // },
    // add: (state, action) => {
    //   state.data.push(action.payload);
    // },
    // del: (state, action) => {
    //   state.data.splice(
    //     state.data.findIndex((item) => item.id === action.payload.id),
    //     1,
    //   );
    // },
    changeTask: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload.id);
      state.data[index].title = action.payload.title;
    },
    // editReadyStatus: (state, action) => {
    //   const index = state.data.findIndex((item) => item.id === action.payload);
    //   state.data[index].isCompleted = !state.data[index].isCompleted;
    // },
    editStatus: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload);
      state.data[index].isEdit = !state.data[index].isEdit;
    },
  },
  extraReducers: {
    [fetchLoadTasks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchLoadTasks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.length = 0;
      state.data.push(...action.payload.data);
      state.data.sort((a, b) => a.isCompleted - b.isCompleted);
    },
    [fetchLoadTasks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action;
      handlingError(state.error)
    },


    [fetchAddTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAddTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.push(action.payload.data);
    },
    [fetchAddTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action;
      handlingError(state.error)
    },


    [fetchEditStatusTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchEditStatusTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const index = state.data.findIndex((item) => item.id === action.payload);
      state.data[index].isCompleted = !state.data[index].isCompleted;
      state.data.sort((a, b) => a.isCompleted - b.isCompleted);
    },
    [fetchEditStatusTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action;
      handlingError(state.error)
    },

    [fetchDeleteTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDeleteTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.splice(
        state.data.findIndex((item) => item.id === action.payload.data.id),
        1,
      );
    },
    [fetchDeleteTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action;
      handlingError(state.error)
    },


    [fetchEditTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchEditTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const index = state.data.findIndex((item) => item.id === action.payload.id);
      state.data[index].title = action.payload.data.title;
    },
    [fetchEditTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action;
      handlingError(state.error)
    },


  }
});

export const { sort, del, changeTask, editReadyStatus, editStatus, add } =
  tasksSlice.actions;
export default tasksSlice.reducer;
