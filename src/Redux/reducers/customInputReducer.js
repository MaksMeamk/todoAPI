import { ADD_TITLE } from "../actions/customInputAction";


const initialTitle = '';

export const customInputReducer = (state = initialTitle, action) => {
    switch (action.type) {
        case ADD_TITLE: return action.payload;
        default: return ""
    }
}