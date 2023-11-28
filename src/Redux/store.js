import { legacy_createStore as createStore, combineReducers } from "redux";
import { authorizationReducer } from "./reducers/authorizationReducer";
import { registrationReducer } from "./reducers/registrationReducer";
import { customInputReducer } from "./reducers/customInputReducer";
import { tasksReducer } from "./reducers/tasksReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskLoadReducer } from "./reducers/taskLoadReducer";
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
  customInput: customInputReducer,
  tasks: tasksReducer,
  taskLoad: taskLoadReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
