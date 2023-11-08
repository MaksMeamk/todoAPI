import { EDIT_TITLE } from "../actions/todoAction";




export const todoReducer = (state = itialStateTitle, action) => {
    switch (action.type) {
        case EDIT_TITLE: return { ...state, task: action.payload };
        default: return state
    }
}