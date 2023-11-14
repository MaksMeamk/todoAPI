import { EDIT_TITLE, START_EDIT, END_EDIT } from "../actions/todoAction";

const initialState = {};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TITLE:
      const { id, newTitle } = action.payload;
      return { ...state, [id]: { ...state[id], title: newTitle } };
    case START_EDIT:
      const { id: startId } = action.payload;
      return { ...state, [startId]: { ...state[startId], isEdit: true } };
    case END_EDIT:
      const { id: endId } = action.payload;
      return { ...state, [endId]: { ...state[endId], isEdit: false } };
    default:
      return state;
  }
};
