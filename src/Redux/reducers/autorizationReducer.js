import { ADD_EMAIL, ADD_PASSWORD } from "../actions/autorizationAction"

const initialState = { email: '', password: '' }

export const autorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMAIL: return { ...state, email: action.payload }
        case ADD_PASSWORD: return { ...state, password: action.payload }
        default: return { ...state }
    }

}