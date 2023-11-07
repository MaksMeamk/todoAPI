import { ADD_USER_NAME, ADD_EMAIL, ADD_PASSWORD, ADD_AGE, ADD_GENDER } from "../actions/registartionAction"

const initialState = { userName: '', email: '', password: '', age: '', gender: '' }

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_NAME: return { ...state, userName: action.payload }
        case ADD_EMAIL: return { ...state, email: action.payload }
        case ADD_PASSWORD: return { ...state, password: action.payload }
        case ADD_AGE: return { ...state, age: action.payload }
        case ADD_GENDER: return { ...state, gender: action.payload }
        default: return { ...state }
    }

}