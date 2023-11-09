import { LOAD } from "../actions/tasksAction";


const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: return action.payload    
    default: return state;
  }
};
