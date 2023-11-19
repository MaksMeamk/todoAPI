import { LOAD, DELETE, EDIT_TASK, EDIT_READY_STATUS, EDIT_STATUS } from "../actions/tasksAction";


const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: return action.payload
    case DELETE:
      const { id: idDel } = action.payload;
      return state.filter(item => item.id !== idDel);
    case EDIT_TASK:
      const { id, newTitle } = action.payload;
      return state.map(item => item.id === id ? { ...item, title: newTitle } : item);
    case EDIT_READY_STATUS:
      return state.map(item => item.id === action.payload.id ? { ...item, isCompleted: !item.isCompleted } : item);
    case EDIT_STATUS: return action.payload

    default: return state;
  }
};
