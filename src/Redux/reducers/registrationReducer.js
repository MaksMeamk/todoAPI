import { ADD_USER_DATA } from "../actions/registartionAction"

const initialState = { username: '', email: '', password: '', age: '', gender: '' }

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DATA: return { ...state, ...action.payload }
        default: return { ...state }
    }

}