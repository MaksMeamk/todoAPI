import taskLoadSlice from "./slices/taskLoadSlice";
import { configureStore } from '@reduxjs/toolkit'
import authorizationSlice from "./slices/authorizationSlice";
import registrationSlice from "./slices/registrationSlice";
import customInputSlice from "./slices/customInputSlice";
import tasksSlice from "./slices/tasksSlice";

const store = configureStore({
  reducer: {
    authorization: authorizationSlice,
    registration: registrationSlice,
    customInput: customInputSlice,
    tasks: tasksSlice,
    taskLoad: taskLoadSlice,
  }
})

export default store;

