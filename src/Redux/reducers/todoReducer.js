import { EDIT_TITLE, EDIT_STATUS } from "../actions/todoAction";

const initialState = { task: "", isEdit: false };

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TITLE:
      return { ...state, task: action.payload };
    case EDIT_STATUS:
      return { ...state, isEdit: action.payload };
    default:
      return state;
  }
};
