import { CHANGE_STATUS_LOAD_TASK } from "../actions/taskLoadAction";


const initialState = false;

export const taskLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS_LOAD_TASK: return action.payload    
    default: return state;
  }
};
