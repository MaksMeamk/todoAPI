import { createSlice } from "@reduxjs/toolkit";
import { fetchLoadTasks, fetchAddTodo, fetchEditStatusTodo, fetchEditTodo, fetchDeleteTodo } from "../../Requests";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    status: '',
    isLoad: true,
    error: '',
    data: []
  },
  extraReducers: {
    [fetchLoadTasks.pending]: (state) => {
      state.isLoad = true;
      state.status = 'loading';
    },
    [fetchLoadTasks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.isLoad = false;
      state.data.length = 0;
      state.data.push(...action.payload);
      state.data.sort((a, b) => a.isCompleted - b.isCompleted);
    },
    [fetchLoadTasks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },


    [fetchAddTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAddTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.push(action.payload);
      state.data.sort((a, b) => a.isCompleted - b.isCompleted);
    },
    [fetchAddTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },


    [fetchEditStatusTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchEditStatusTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.forEach(element => {
        if (element.id === action.payload.id) {
          element.isCompleted = !element.isCompleted
        }
      });
      state.data.sort((a, b) => a.isCompleted - b.isCompleted);
    },
    [fetchEditStatusTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },


    [fetchDeleteTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDeleteTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.splice(
        state.data.findIndex((item) => item.id === action.payload.id),
        1,
      );
    },
    [fetchDeleteTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },


    [fetchEditTodo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchEditTodo.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.forEach(element => {
        if (element.id === action.payload.id) {
          element.title = action.payload.title
        }
      });

    },
    [fetchEditTodo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },


  }
});
export default tasksSlice.reducer;
