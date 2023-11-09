import { legacy_createStore as createStore, combineReducers } from "redux";
import { autorizationReducer } from "./reducers/autorizationReducer";
import { registrationReducer } from "./reducers/registrationReducer";
import { customInputReducer } from "./reducers/customInputReducer";
import { todoReducer } from "./reducers/todoReducer";
import { tasksReducer } from "./reducers/tasksReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskLoadReducer } from "./reducers/taskLoadReducer";

const rootReducer = combineReducers({
  autorization: autorizationReducer,
  registration: registrationReducer,
  customInput: customInputReducer,
  todo: todoReducer,
  tasks: tasksReducer,
  taskLoad: taskLoadReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
